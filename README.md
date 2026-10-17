# Arquitectura Empresarial de TI

Atlas de estudio interactivo para aprender arquitectura empresarial de TI mediante siete temas, recursos de consulta, autoevaluaciones, actividades, tarjetas de repaso y un caso práctico progresivo. El sitio se construye con Astro y se publica como contenido estático en GitHub Pages.

Repositorio fuente: [HugoAdama/Arquitectura_Empresarial_TI](https://github.com/HugoAdama/Arquitectura_Empresarial_TI). El footer del sitio enlaza la atribución de desarrollo con este repositorio.

## Funciones de aprendizaje

- Ruta de estudio por tema con objetivos, tiempos estimados y actividades sugeridas.
- Progreso local para marcar temas estudiados y retomar desde el último tema visitado.
- Preferencias de lectura para ajustar el tamaño del texto, activar contraste alto y reducir distracciones.
- Actividades de opción múltiple con retroalimentación explicativa inmediata.
- Cuatro cuestionarios progresivos con respuestas desarrolladas y autoevaluación personal. No son exámenes calificados automáticamente.
- Tarjetas con recuperación activa y recordatorios de repaso en uno, tres o siete días.
- Caso bancario progresivo para aplicar los conceptos a decisiones de arquitectura.

El progreso, las preferencias, la autoevaluación y las fechas de repaso se guardan en `localStorage` del navegador. No hay cuenta de usuario, sincronización entre dispositivos ni envío de estos datos a un servidor.

## Documentación

- [Índice de documentación](docs/README.md)
- [Arquitectura y estructura del proyecto](docs/architecture.md)
- [Experiencia y funciones de aprendizaje](docs/learning-experience.md)
- [Guía para mantener el contenido](docs/content-authoring.md)
- [Desarrollo local y publicación](docs/development-and-deployment.md)

## Estructura del repositorio

- `src/pages/` define las páginas Astro.
- `src/components/` contiene las secciones y elementos de interfaz.
- `src/data/` contiene navegación, contenido temático, actividades, preguntas, tarjetas y recursos.
- `src/scripts/` contiene navegación, búsqueda y funciones interactivas del navegador.
- `src/styles/` contiene estilos globales y estilos de las herramientas de aprendizaje.
- `public/` contiene activos estáticos, incluido el favicon.
- `docs/` contiene la documentación de mantenimiento del proyecto.
- `src/` es la fuente del sitio publicado.

## Desarrollo rápido

Se requiere Node.js y npm. Para instalar dependencias y ejecutar el servidor local:

```sh
npm ci
npm run dev
```

Comandos disponibles:

```sh
npm run check
npm run build
npm run preview
```

Consulta [Desarrollo local y publicación](docs/development-and-deployment.md) para conocer la configuración de GitHub Pages y el proceso de despliegue.
