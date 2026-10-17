# Arquitectura y estructura del proyecto

## Resumen

El proyecto es un sitio de estudio de una sola página construido con Astro. Astro genera HTML estático; TypeScript añade navegación, búsqueda, seguimiento local del aprendizaje y actividades que se ejecutan en el navegador. No hay servidor de aplicación ni base de datos.

```text
src/pages/index.astro
  ├── SiteHeader
  ├── Sidebar
  ├── CourseOverview
  ├── LearningHub
  ├── TopicCatalog
  ├── StudyResources
  └── Questionnaires
       └── BaseLayout
            ├── global.css
            ├── learning.css
            └── course.ts
                 └── learning-features.ts
```

La página compone secciones desde `src/pages/index.astro`. Los componentes Astro presentan el contenido y los controles; los datos se mantienen en módulos bajo `src/data/`; los scripts conectan esos controles después de cargar el documento.

## Responsabilidades por carpeta

| Ruta | Responsabilidad |
| --- | --- |
| `src/pages/` | Entrada de página y composición de secciones. |
| `src/layouts/` | Estructura HTML compartida, metadatos, favicon y carga de estilos y scripts. |
| `src/components/` | Navegación, temas, recursos y herramientas de aprendizaje. |
| `src/data/` | Navegación y contenido estructurado para los componentes. |
| `src/scripts/` | Comportamiento interactivo del navegador. |
| `src/styles/` | Estilos generales y estilos específicos del centro de aprendizaje. |
| `public/` | Archivos estáticos copiados al resultado de compilación. |
| `docs/` | Documentación funcional y técnica. |

## Fuentes centrales de datos

- `src/data/course-navigation.ts` define los identificadores y etiquetas de navegación de los siete temas. La barra lateral, el catálogo y las herramientas que recorren los temas dependen de esta lista.
- `src/data/learning-tools.ts` crea la ruta de estudio y define actividades, tarjetas y etapas del caso práctico.
- `src/data/learning-expansions.ts` contiene material ampliado por tema.
- `src/data/questionnaires.ts` contiene los niveles y las preguntas con respuestas explicadas.
- `src/data/video-resources.ts` contiene los recursos audiovisuales complementarios.

Al cambiar el identificador de un tema, comprueba sus usos en enlaces, secciones, estado guardado y filtros. Estos identificadores forman parte de la navegación interna y de los datos persistidos en el navegador.

## Comportamiento del navegador

`src/scripts/course.ts` configura la navegación, el progreso de lectura y la búsqueda del material. `src/scripts/learning-features.ts` configura la ruta de estudio, las preferencias de lectura, actividades, tarjetas y autoevaluación de cuestionarios.

El estado se conserva en `localStorage` por navegador y origen. Borrar los datos del sitio o usar otro navegador elimina o separa ese estado. No se debe presentar como sincronización de cuenta ni como registro académico.

## Rutas y activos

`astro.config.mjs` define el sitio y una ruta base de proyecto para GitHub Pages: `/Arquitectura_Empresarial_TI`. Los enlaces a activos públicos que deban funcionar bajo esa ruta deben construirse con `import.meta.env.BASE_URL` o con una utilidad de rutas compatible con Astro. El favicon se sirve desde `public/favicon.svg` y se enlaza en `src/layouts/BaseLayout.astro`.

El archivo `tema1_completo.html` es un documento heredado y no es la fuente del sitio publicado. Los cambios de producto deben realizarse en `src/` y en sus datos fuente.
