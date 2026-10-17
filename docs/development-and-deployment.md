# Desarrollo local y publicación

## Requisitos

- Node.js compatible con la versión usada en CI; el workflow configura Node.js 24.
- npm y acceso a la red para instalar las dependencias del proyecto.

## Ejecutar localmente

Desde la raíz del repositorio:

```sh
npm ci
npm run dev
```

Comandos definidos en `package.json`:

| Comando | Uso |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo de Astro. |
| `npm run check` | Ejecuta las comprobaciones de Astro y TypeScript. |
| `npm run build` | Genera el sitio estático en `dist/`. |
| `npm run preview` | Sirve localmente el resultado de compilación. |

Para revisar el resultado de producción localmente, ejecuta `npm run build` y luego `npm run preview`.

## Configuración de GitHub Pages

`astro.config.mjs` establece:

- El origen del sitio en `https://hugodama.github.io`.
- La ruta base `/Arquitectura_Empresarial_TI`, porque el proyecto se publica como un repositorio de GitHub Pages.
- Salida estática.

Si cambia el propietario, nombre del repositorio, dominio o tipo de publicación, revisa `site`, `base`, las rutas de activos y los enlaces internos.

## Flujo de publicación

`.github/workflows/deploy.yml` se ejecuta al hacer push a `main` o manualmente. El workflow instala dependencias con `npm ci`, ejecuta `npm run check` y `npm run build`, carga `dist/` como artefacto y publica ese artefacto en GitHub Pages. Una compilación que no supere las comprobaciones no pasa a la etapa de despliegue.

## Solución de problemas

- **Los recursos devuelven 404 en Pages:** comprueba que sus rutas consideren `import.meta.env.BASE_URL` y la base configurada.
- **El cambio no aparece publicado:** confirma que el workflow de la rama `main` terminó correctamente y que el despliegue usa el artefacto `dist/` de esa ejecución.
- **El progreso parece reiniciado:** `localStorage` es específico del navegador y del origen. Cambiar de dispositivo, navegador, perfil o dominio separa el estado.
- **Las dependencias difieren:** usa `npm ci` para instalar exactamente lo fijado en `package-lock.json`.
