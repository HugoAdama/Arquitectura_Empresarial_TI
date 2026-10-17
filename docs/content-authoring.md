# Mantenimiento del contenido

## Dónde editar

| Contenido | Archivo fuente |
| --- | --- |
| Nombres, orden e identificadores de temas | `src/data/course-navigation.ts` |
| Objetivos, tareas, actividades, tarjetas y caso progresivo | `src/data/learning-tools.ts` |
| Explicaciones y material ampliado por tema | `src/data/learning-expansions.ts` |
| Preguntas abiertas y respuestas de los cuatro niveles | `src/data/questionnaires.ts` |
| Enlaces a videos complementarios | `src/data/video-resources.ts` |
| Composición de la página | `src/pages/index.astro` |
| Texto y estructura de navegación | Componentes en `src/components/` |

## Agregar o cambiar un tema

1. Edita `courseNavigation` en `src/data/course-navigation.ts`, conservando un identificador estable y único.
2. Añade el contenido temático correspondiente en `src/data/learning-expansions.ts` y la sección visible en `src/components/TopicCatalog.astro` o en el componente que corresponda.
3. Añade orientación de estudio en `topicGuidance` en `src/data/learning-tools.ts` si el tema debe aparecer en la ruta.
4. Añade una actividad, una tarjeta y preguntas de cuestionario cuando sean pertinentes.
5. Comprueba los enlaces de navegación, el identificador del elemento HTML y los filtros de búsqueda. Algunos datos existentes relacionan las etiquetas con los identificadores.

El total de temas se muestra actualmente como siete en varios textos y atributos accesibles. Si cambia la cantidad, actualiza también esos textos, límites y cálculos de progreso en los componentes y scripts.

## Escribir actividades y respuestas

- Formula una pregunta que evalúe una decisión o un concepto concreto.
- Incluye una sola opción correcta en `activities` y una explicación que justifique la respuesta.
- Para las preguntas abiertas, redacta respuestas modelo que expliquen el razonamiento y los factores que deben considerarse. El usuario se autoevalúa; el sistema no compara texto libre ni asigna una nota.
- Mantén los cuestionarios organizados por nivel y conserva identificadores estables para que la autoevaluación guardada siga asociada a las preguntas.
- Revisa consistencia terminológica entre temas, tarjetas, actividades y glosario.

## Enlaces y recursos

Los recursos audiovisuales y de estudio deben apuntar a fuentes que el lector pueda abrir y consultar. Comprueba las URL y el texto visible al actualizarlos. Evita presentar una referencia como validación académica si el contenido no se ha revisado contra esa fuente.

## Estilo editorial

- Escribe instrucciones directas y específicas.
- Separa conceptos, ejemplos, responsabilidades y riesgos.
- Explica siglas en su primera aparición cuando el público pueda no conocerlas.
- Usa español consistente y etiquetas breves en controles.
- Mantén Markdown sin emojis, como solicita la guía editorial del proyecto.
