# Portfolio — Nicolas Martinez

Landing de una sola página que presenta a Nicolas Martinez, desarrollador fullstack en transición desde soporte técnico. Incluye proyectos, skills, contacto y un selector de idioma ES/EN.

Construido con React y Vite.

## Desarrollo

```bash
npm install
npm run dev
```

Otros comandos:

```bash
npm run build    # build de producción
npm run preview  # sirve el build de producción localmente
npm run lint      # oxlint
```

## Estructura

- `src/data/translations.js` — todos los textos en ES/EN.
- `src/data/profile.js` — email, LinkedIn, GitHub y enlace del CV (editar antes de publicar).
- `src/data/projects.js` — proyectos mostrados en la sección Proyectos.
- `src/data/skills.js` — lista de skills.
- `src/context/LanguageContext.jsx` — estado del idioma activo (ES/EN).
- `src/components/` — un componente por sección (Header, Hero, About, Projects, Skills, Contact, Footer).

## Personalización

Para agregar un proyecto nuevo, se agrega un objeto al arreglo en `src/data/projects.js` siguiendo la misma estructura (nombre, estado, tecnologías, enlaces de demo/código y, opcionalmente, problema y decisiones técnicas por idioma).

Antes de compartir la página, reemplaza los enlaces marcados como `EDIT_ME` en `src/data/profile.js` y `src/data/projects.js`, y sustituye `public/cv-nicolas-martinez.pdf` por el CV real.
