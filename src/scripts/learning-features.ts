import { courseTopics } from '../data/course-navigation';

export const initializeLearningFeatures = () => {
  const storage = {
    read<T>(key: string, fallback: T): T {
      try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) as T : fallback;
      } catch { return fallback; }
    },
    write(key: string, value: unknown) {
      try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Storage may be disabled. */ }
    },
  };

  const completionKey = 'ae-learning-completed-v1';
  const lastTopicKey = 'ae-learning-last-topic-v1';
  const topicIds = courseTopics.map((topic) => topic.id);
  const completionInputs = [...document.querySelectorAll<HTMLInputElement>('[data-topic-complete]')];
  const progressLabel = document.querySelector<HTMLElement>('#learning-progress-label');
  const progressTrack = document.querySelector<HTMLElement>('.learning-progress-track');
  const progressBar = document.querySelector<HTMLElement>('#learning-progress-bar');
  const resumeLink = document.querySelector<HTMLAnchorElement>('#resume-learning');
  let completed = storage.read<number[]>(completionKey, []);

  const updateLearningProgress = () => {
    completionInputs.forEach((input) => {
      const topicIndex = Number(input.dataset.topicComplete);
      input.checked = completed.includes(topicIndex);
      input.closest('.roadmap-item')?.classList.toggle('is-complete', input.checked);
    });
    const count = completed.length;
    if (progressLabel) progressLabel.textContent = `${count} de 7 temas marcados como estudiados`;
    if (progressBar) progressBar.style.width = `${(count / 7) * 100}%`;
    progressTrack?.setAttribute('aria-valuenow', `${count}`);
    const lastTopic = storage.read<string>(lastTopicKey, 'idea');
    const topic = topicIds.includes(lastTopic) ? lastTopic : 'idea';
    if (resumeLink) {
      resumeLink.href = `#${topic}`;
      const topicLabel = courseTopics.find((item) => item.id === topic)?.label.replace(/^Tema \d+ · /, '') || 'Fundamentos';
      resumeLink.innerHTML = `Retomar: ${topicLabel} <span aria-hidden="true">→</span>`;
    }
  };

  completionInputs.forEach((input) => input.addEventListener('change', () => {
    const index = Number(input.dataset.topicComplete);
    completed = input.checked ? [...new Set([...completed, index])] : completed.filter((item) => item !== index);
    completed.sort((a, b) => a - b);
    storage.write(completionKey, completed);
    updateLearningProgress();
  }));
  document.querySelector('#reset-learning-progress')?.addEventListener('click', () => {
    completed = [];
    storage.write(completionKey, completed);
    storage.write(lastTopicKey, 'idea');
    updateLearningProgress();
  });
  document.querySelectorAll<HTMLAnchorElement>('.roadmap-link, #resume-learning').forEach((link) => link.addEventListener('click', () => {
    const topicId = link.hash.slice(1);
    if (topicIds.includes(topicId)) storage.write(lastTopicKey, topicId);
  }));
  if ('IntersectionObserver' in window) {
    const topicObserver = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) storage.write(lastTopicKey, visible.target.id);
    }, { rootMargin: '-20% 0px -65% 0px' });
    topicIds.forEach((id) => { const topic = document.getElementById(id); if (topic) topicObserver.observe(topic); });
  }
  updateLearningProgress();

  const preferenceKey = 'ae-reading-preferences-v1';
  const preferenceDefaults = { fontStep: 0, contrast: false, focus: false };
  const preferences = { ...preferenceDefaults, ...storage.read(preferenceKey, preferenceDefaults) };
  const contrastToggle = document.querySelector<HTMLInputElement>('#contrast-toggle');
  const focusToggle = document.querySelector<HTMLInputElement>('#focus-toggle');
  const savePreferences = () => {
    document.documentElement.style.setProperty('--reader-font-scale', `${1 + preferences.fontStep * 0.08}`);
    document.documentElement.classList.toggle('reader-high-contrast', preferences.contrast);
    document.documentElement.classList.toggle('reader-focus', preferences.focus);
    if (contrastToggle) contrastToggle.checked = preferences.contrast;
    if (focusToggle) focusToggle.checked = preferences.focus;
    storage.write(preferenceKey, preferences);
  };
  document.querySelectorAll<HTMLButtonElement>('[data-font-step]').forEach((button) => button.addEventListener('click', () => {
    preferences.fontStep = Math.max(-2, Math.min(4, preferences.fontStep + Number(button.dataset.fontStep)));
    savePreferences();
  }));
  contrastToggle?.addEventListener('change', () => { preferences.contrast = contrastToggle.checked; savePreferences(); });
  focusToggle?.addEventListener('change', () => { preferences.focus = focusToggle.checked; savePreferences(); });
  document.querySelector('#reset-reading-preferences')?.addEventListener('click', () => {
    Object.assign(preferences, preferenceDefaults);
    savePreferences();
  });
  savePreferences();

  document.querySelectorAll<HTMLElement>('[data-activity]').forEach((activity) => {
    const submit = activity.querySelector<HTMLButtonElement>('.activity-submit');
    const feedback = activity.querySelector<HTMLElement>('.activity-feedback');
    submit?.addEventListener('click', () => {
      const selected = activity.querySelector<HTMLInputElement>('input[type="radio"]:checked');
      if (!selected) {
        if (feedback) feedback.textContent = 'Elige una opción para comprobar tu respuesta.';
        activity.classList.remove('is-correct', 'is-incorrect');
        return;
      }
      const correct = Number(selected.value) === Number(activity.dataset.correct);
      activity.classList.toggle('is-correct', correct);
      activity.classList.toggle('is-incorrect', !correct);
      if (feedback) feedback.textContent = `${correct ? '¡Correcto! ' : 'Aún no. '} ${activity.dataset.explanation || ''}`;
    });
  });

  const cardElement = document.querySelector<HTMLElement>('#flashcard');
  if (cardElement) {
    type Flashcard = { front: string; back: string };
    type CardReview = Record<number, number>;
    const cards = JSON.parse(cardElement.dataset.cards || '[]') as Flashcard[];
    const reviewKey = 'ae-flashcard-due-v1';
    let dueDates = storage.read<CardReview>(reviewKey, {});
    let cardIndex = 0;
    let dueOnly = false;
    const front = document.querySelector<HTMLElement>('#flashcard-front');
    const back = document.querySelector<HTMLElement>('#flashcard-back');
    const count = document.querySelector<HTMLElement>('#flashcard-count');
    const ratingPanel = document.querySelector<HTMLElement>('.flashcard-rating');
    const cardStatus = document.querySelector<HTMLElement>('#flashcard-status');
    let reviewMessage = '';
    const availableCards = () => cards.map((_, index) => index).filter((index) => !dueOnly || !dueDates[index] || dueDates[index] <= Date.now());
    const renderCard = () => {
      const available = availableCards();
      if (!available.length) {
        if (front) front.textContent = '¡Repaso al día! No tienes tarjetas pendientes.';
        if (back) { back.hidden = true; back.textContent = ''; }
        if (count) count.textContent = 'Sin tarjetas pendientes';
        const reveal = document.querySelector<HTMLButtonElement>('#reveal-flashcard');
        if (reveal) reveal.hidden = true;
        if (ratingPanel) ratingPanel.hidden = true;
        if (cardStatus) cardStatus.textContent = 'Vuelve cuando llegue la fecha de repaso o desactiva el filtro.';
        return;
      }
      cardIndex = ((cardIndex % available.length) + available.length) % available.length;
      const actualIndex = available[cardIndex];
      cardElement.dataset.cardIndex = `${actualIndex}`;
      if (front) front.textContent = cards[actualIndex].front;
      if (back) { back.textContent = cards[actualIndex].back; back.hidden = true; }
      if (count) count.textContent = `Tarjeta ${cardIndex + 1} de ${available.length}`;
      const reveal = document.querySelector<HTMLButtonElement>('#reveal-flashcard');
      if (reveal) { reveal.hidden = false; reveal.disabled = false; reveal.textContent = 'Mostrar respuesta'; }
      if (ratingPanel) ratingPanel.hidden = true;
      if (cardStatus) cardStatus.textContent = reviewMessage;
    };
    document.querySelector('#reveal-flashcard')?.addEventListener('click', () => {
      if (back) back.hidden = false;
      if (ratingPanel) ratingPanel.hidden = false;
      const reveal = document.querySelector<HTMLButtonElement>('#reveal-flashcard');
      if (reveal) reveal.disabled = true;
    });
    document.querySelectorAll<HTMLButtonElement>('[data-rating]').forEach((button) => button.addEventListener('click', () => {
      const actualIndex = Number(cardElement.dataset.cardIndex);
      const interval = button.dataset.rating === 'again' ? 1 : button.dataset.rating === 'hard' ? 3 : 7;
      dueDates[actualIndex] = Date.now() + interval * 24 * 60 * 60 * 1000;
      storage.write(reviewKey, dueDates);
      reviewMessage = `Tarjeta programada para dentro de ${interval} día${interval === 1 ? '' : 's'}.`;
      // Al filtrar por tarjetas pendientes, la tarjeta actual sale de la lista.
      // Conserva su posición para pasar a la que ahora ocupa ese índice.
      if (!dueOnly) cardIndex += 1;
      renderCard();
    }));
    document.querySelector('#next-flashcard')?.addEventListener('click', () => { cardIndex += 1; renderCard(); });
    document.querySelector('#previous-flashcard')?.addEventListener('click', () => { cardIndex -= 1; renderCard(); });
    document.querySelector('#due-cards-only')?.addEventListener('change', (event) => { dueOnly = (event.target as HTMLInputElement).checked; cardIndex = 0; renderCard(); });
    document.querySelector('#reset-flashcards')?.addEventListener('click', () => { dueDates = {}; storage.write(reviewKey, dueDates); cardIndex = 0; renderCard(); });
    renderCard();
  }

  const quizReviewKey = 'ae-questionnaire-self-check-v1';
  let quizReviews = storage.read<Record<string, string>>(quizReviewKey, {});
  function updateQuizSummary(content: HTMLElement | null) {
    if (!content) return;
    const questions = [...content.querySelectorAll<HTMLElement>('[data-question-review]')];
    const marked = questions.filter((question) => question.dataset.reviewStatus).length;
    const review = questions.filter((question) => ['review', 'partial'].includes(question.dataset.reviewStatus || '')).length;
    const summary = content.querySelector<HTMLElement>('[data-quiz-summary]');
    if (summary) summary.textContent = `${marked} de ${questions.length} evaluadas · ${review} para repasar.`;
  }
  document.querySelectorAll<HTMLElement>('[data-question-review]').forEach((question) => {
    const key = question.dataset.questionReview || '';
    const savedStatus = quizReviews[key];
    const controls = question.querySelectorAll<HTMLButtonElement>('[data-self-check]');
    if (savedStatus) {
      question.dataset.reviewStatus = savedStatus;
      controls.forEach((button) => button.setAttribute('aria-pressed', `${button.dataset.selfCheck === savedStatus}`));
    }
    controls.forEach((button) => button.addEventListener('click', () => {
      const status = button.dataset.selfCheck || 'review';
      quizReviews[key] = status;
      question.dataset.reviewStatus = status;
      controls.forEach((control) => control.setAttribute('aria-pressed', `${control === button}`));
      storage.write(quizReviewKey, quizReviews);
      updateQuizSummary(question.closest<HTMLElement>('.questionnaire-content'));
    }));
  });
  document.querySelectorAll<HTMLElement>('.questionnaire-content').forEach((content) => updateQuizSummary(content));
  document.querySelectorAll<HTMLElement>('[data-quiz-tools]').forEach((tools) => {
    const content = tools.closest('.questionnaire-content');
    const filter = tools.querySelector<HTMLButtonElement>('[data-review-filter]');
    const reset = tools.querySelector<HTMLButtonElement>('[data-review-reset]');
    filter?.addEventListener('click', () => {
      const active = filter.dataset.active === 'true';
      filter.dataset.active = `${!active}`;
      filter.textContent = active ? 'Mostrar preguntas por repasar' : 'Mostrar todas las preguntas';
      content?.querySelectorAll<HTMLElement>('[data-question-review]').forEach((question) => {
        question.hidden = !active && !['review', 'partial'].includes(question.dataset.reviewStatus || '');
      });
    });
    reset?.addEventListener('click', () => {
      content?.querySelectorAll<HTMLElement>('[data-question-review]').forEach((question) => {
        delete quizReviews[question.dataset.questionReview || ''];
        delete question.dataset.reviewStatus;
        question.hidden = false;
        question.querySelectorAll<HTMLButtonElement>('[data-self-check]').forEach((button) => button.setAttribute('aria-pressed', 'false'));
      });
      storage.write(quizReviewKey, quizReviews);
      if (filter) { filter.dataset.active = 'false'; filter.textContent = 'Mostrar preguntas por repasar'; }
      updateQuizSummary(content as HTMLElement | null);
    });
  });
};

