# Arquitectura Empresarial de TI

Guía de estudio construida con Astro 7 y publicada como sitio estático en GitHub Pages.

## Estructura

- `src/components/` contiene las vistas Astro.
- `src/data/` contiene la navegación, actividades, tarjetas y material ampliado.
- `src/scripts/` contiene navegación de página y funciones de aprendizaje del navegador.
- `src/styles/` separa los estilos generales de los componentes de aprendizaje.
- `tema1_completo.html` es un material HTML heredado; la versión publicada se genera desde `src/`.

El progreso, las preferencias, la autoevaluación y los repasos se guardan en `localStorage` del navegador. No se sincronizan entre dispositivos ni se envían a un servidor.

## Desarrollo local

```sh
npm ci
npm run dev
```

Para validar el proyecto y generar el sitio:

```sh
npm run check
npm run build
```

## Publicación

Cada push a `main` ejecuta el workflow de GitHub Actions y publica `dist/` en GitHub Pages.
