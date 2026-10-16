      const initializeCourse = () => {
      const searchInput = document.querySelector<HTMLInputElement>('#topic-search');
      const topicFilter = document.querySelector<HTMLSelectElement>('#topic-filter');
      const searchStatus = document.querySelector<HTMLElement>('#search-status');
      const searchResults = document.querySelector<HTMLUListElement>('#search-results');
      if (!searchInput || !topicFilter || !searchStatus || !searchResults) return;

      const searchEntries = [...document.querySelectorAll<HTMLElement>('[data-search-entry]')].map((element) => ({
        element,
        title: element.closest('#glossary-terms')
          ? element.querySelector('summary')?.firstChild?.textContent?.trim() || 'Término'
          : element.dataset.title || element.querySelector('h2, h3')?.textContent.trim() || 'Sección',
        text: `${element.dataset.title || ''} ${element.textContent}`.toLocaleLowerCase('es'),
        topic: element.dataset.topic || element.closest('.topic-section')?.id || 'tema-1',
        isGlossary: Boolean(element.closest('#glossary-terms')),
      }));

      const sectionLinks = [...document.querySelectorAll<HTMLAnchorElement>('.sidebar nav a')];
      const currentSectionLabel = document.querySelector<HTMLElement>('#mobile-current');
      const navigationSections = [
        { id: 'idea', label: 'Tema 1 · Fundamentos' },
        { id: 'tema-2', label: 'Tema 2 · Dominios' },
        { id: 'tema-3', label: 'Tema 3 · Nube e infraestructura' },
        { id: 'tema-4', label: 'Tema 4 · Procesos' },
        { id: 'tema-5', label: 'Tema 5 · Servicios y APIs' },
        { id: 'tema-6', label: 'Tema 6 · Datos y analítica' },
        { id: 'tema-7', label: 'Tema 7 · Emergentes y gobierno' },
        { id: 'caso-banco', label: 'Caso del banco' },
        { id: 'glosario', label: 'Glosario' },
        { id: 'repaso', label: 'Repaso general' },
        { id: 'fuentes', label: 'Fuentes del curso' },
      ];

      const readingProgress = document.querySelector<HTMLElement>('.reading-progress');
      const readingProgressBar = document.querySelector<HTMLElement>('#reading-progress-bar');
      const updateReadingProgress = () => {
        if (!readingProgress || !readingProgressBar) return;
        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollableHeight > 0 ? Math.min(100, Math.max(0, (window.scrollY / scrollableHeight) * 100)) : 0;
        readingProgressBar.style.width = `${progress}%`;
        readingProgress.setAttribute('aria-valuenow', `${Math.round(progress)}`);
      };
      window.addEventListener('scroll', updateReadingProgress, { passive: true });
      window.addEventListener('resize', updateReadingProgress);
      updateReadingProgress();

      const setCurrentSection = (id: string) => {
        const section = navigationSections.find((item) => item.id === id);
        if (!section) return;
        sectionLinks.forEach((link) => {
          if (link.hash === `#${id}`) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
        if (currentSectionLabel) currentSectionLabel.textContent = section.label;
      };

      const revealTarget = (target: HTMLElement) => {
        const chapter = target.closest<HTMLDetailsElement>('.chapter-accordion');
        if (chapter) {
          document.querySelectorAll<HTMLDetailsElement>('.chapter-accordion[open]').forEach((openChapter) => {
            if (openChapter !== chapter) openChapter.open = false;
          });
          chapter.open = true;
        }

        let parent: HTMLElement | null = target;
        while (parent) {
          if (parent instanceof HTMLDetailsElement) parent.open = true;
          parent = parent.parentElement;
        }
      };

      const revealCurrentHash = () => {
        const targetId = decodeURIComponent(window.location.hash.slice(1));
        const target = targetId ? document.getElementById(targetId) : null;
        if (target) revealTarget(target);
      };

      document.querySelectorAll<HTMLDetailsElement>('.chapter-accordion').forEach((chapter) => {
        chapter.addEventListener('toggle', () => {
          if (!chapter.open) return;
          document.querySelectorAll<HTMLDetailsElement>('.chapter-accordion[open]').forEach((openChapter) => {
            if (openChapter !== chapter) openChapter.open = false;
          });
        });
      });

      document.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) return;
        const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
        if (!link) return;
        const target = document.getElementById(link.hash.slice(1));
        if (target) revealTarget(target);
      });
      window.addEventListener('hashchange', revealCurrentHash);
      revealCurrentHash();

      if ('IntersectionObserver' in window) {
        const sectionObserver = new IntersectionObserver((entries) => {
          const visibleSections = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          if (visibleSections.length) setCurrentSection(visibleSections[0].target.id);
        }, { rootMargin: '-18% 0px -68% 0px', threshold: 0 });
        navigationSections.forEach(({ id }) => {
          const section = document.getElementById(id);
          if (section) sectionObserver.observe(section);
        });
      }

      setCurrentSection('idea');

      document.querySelectorAll<HTMLAnchorElement>('.sidebar nav a').forEach((link) => {
        link.addEventListener('click', () => {
          setCurrentSection(link.hash.slice(1));
          const mobileMenu = document.querySelector<HTMLDetailsElement>('.mobile-menu');
          if (mobileMenu) mobileMenu.open = false;
        });
      });

      const normalizeText = (value: string) => value
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLocaleLowerCase('es')
        .trim();

      const updateSearchResults = () => {
        const query = normalizeText(searchInput.value);
        const selectedTopic = topicFilter.value;
        const selectedTopicLabel = topicFilter.selectedOptions[0].textContent;
        searchResults.replaceChildren();
        searchResults.classList.remove('has-results');

        if (!query) {
          searchStatus.textContent = selectedTopic === 'todos'
            ? 'Empieza a escribir para ver secciones relacionadas.'
            : `Filtro activo: ${selectedTopicLabel}. Escribe un concepto para buscar.`;
          return;
        }

        const words = query.split(/\s+/).filter(Boolean);
        const matches = searchEntries
          .filter((entry) => (selectedTopic === 'todos' || entry.topic === selectedTopic)
            && words.every((word: string) => normalizeText(entry.text).includes(word)))
          .sort((a, b) => {
            const score = (entry: (typeof searchEntries)[number]) => {
              const title = normalizeText(entry.title);
              if (title === query) return 0;
              if (title.startsWith(query)) return entry.isGlossary ? 1 : 2;
              if (title.includes(query)) return entry.isGlossary ? 2 : 3;
              return entry.isGlossary ? 4 : 5;
            };
            return score(a) - score(b);
          })
          .slice(0, 12);

        searchResults.classList.add('has-results');
        if (matches.length === 0) {
          const empty = document.createElement('li');
          empty.className = 'no-results';
          empty.textContent = 'No encontré ese término. Prueba con una palabra más general.';
          searchResults.append(empty);
          searchStatus.textContent = `Sin coincidencias en ${selectedTopicLabel}.`;
          return;
        }

        for (const match of matches) {
          const item = document.createElement('li');
          const link = document.createElement('a');
          link.href = `#${match.element.id}`;
          link.textContent = match.title;
          item.append(link);
          searchResults.append(item);
        }
        searchStatus.textContent = `${matches.length} resultado${matches.length === 1 ? '' : 's'} · ${selectedTopicLabel}.`;
      };

      searchInput.addEventListener('input', updateSearchResults);
      topicFilter.addEventListener('change', updateSearchResults);
      searchResults.addEventListener('click', (event) => {
        if (!(event.target instanceof Element)) return;
        const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
        if (!link) return;
        const target = document.getElementById(link.hash.slice(1));
        if (target) revealTarget(target);
      });
      };

      initializeCourse();
