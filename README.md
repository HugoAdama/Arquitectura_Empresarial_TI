# Arquitectura Empresarial de TI

Guía de estudio construida con Astro 7 y publicada como sitio estático en GitHub Pages.

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
