# Experiencia de aprendizaje

## Recorrido

El sitio ofrece siete temas y una ruta sugerida. Cada tema de la ruta incluye una meta, un tiempo estimado y una tarea breve de aplicación. La secuencia completa también ofrece recursos, cuestionarios y un caso práctico para reutilizar conceptos en contexto.

## Herramientas disponibles

### Ruta y progreso

El usuario puede marcar manualmente un tema como estudiado y volver al último tema visitado. El indicador refleja temas marcados, no una medición automática de lectura, comprensión o dominio.

### Preferencias de lectura

La interfaz permite ajustar el tamaño del texto, activar contraste alto y activar una presentación enfocada. Las preferencias se pueden restablecer desde el control de lectura.

### Actividades rápidas

Las preguntas de opción múltiple comprueban la selección en el navegador y muestran una explicación. El conjunto cubre un ejercicio por tema.

### Cuestionarios

Hay cuatro niveles con preguntas abiertas y respuestas desarrolladas. El usuario compara su respuesta con la propuesta y registra una autoevaluación: bien, parcialmente o por repasar. El sistema puede filtrar preguntas que requieren repaso. Esta función es autoevaluación, no calificación objetiva ni examen supervisado.

### Tarjetas y repaso espaciado

El usuario intenta recordar una respuesta antes de revelarla y luego elige un intervalo. La opción de repaso programa la tarjeta para el día siguiente; la valoración intermedia, para dentro de tres días; y la conocida, para dentro de siete días. El filtro permite mostrar las tarjetas pendientes según esas fechas.

### Caso práctico

El caso bancario se divide en cinco etapas. Cada etapa presenta una decisión y permite revelar una pista. Las respuestas del usuario no se envían ni se guardan en el sitio.

## Persistencia local

El script de aprendizaje usa estas claves de `localStorage`:

| Clave | Estado almacenado |
| --- | --- |
| `ae-learning-completed-v1` | Índices de temas marcados como estudiados. |
| `ae-learning-last-topic-v1` | Identificador del último tema visitado. |
| `ae-reading-preferences-v1` | Tamaño del texto y preferencias de contraste y enfoque. |
| `ae-flashcard-due-v1` | Fechas previstas para repasar tarjetas. |
| `ae-questionnaire-self-check-v1` | Estado de autoevaluación por pregunta. |

Los valores permanecen en el dispositivo y origen donde se usó el sitio. El restablecimiento de progreso borra el avance y devuelve el tema inicial; cada herramienta incluye controles para reiniciar su propio estado. Si el almacenamiento está deshabilitado o no disponible, el sitio continúa sin persistencia.

## Accesibilidad y uso

La página incluye un enlace para saltar al contenido, navegación semántica, controles nativos de formulario, etiquetas accesibles y regiones de estado para comunicar cambios. Mantén estas características al modificar componentes: asocia cada control con una etiqueta, conserva el foco visible y comunica el resultado de las interacciones mediante texto.
