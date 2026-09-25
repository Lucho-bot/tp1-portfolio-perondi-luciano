# TP1 — Mi portfolio en React

**Alumno:** Luciano Perondi
**Materia:** Programación IV — Tecnicatura Universitaria en Programación, UTN FRT

## Descripción

Portfolio personal de una sola página hecho con React y Vite. Presenta quién soy, mis habilidades y los proyectos que desarrollé durante la carrera.

La interfaz está dividida en componentes que se comunican mediante props. Las secciones de habilidades y proyectos se generan a partir de arrays de datos con `map()`, y la sección "Sobre mí" tiene un botón "Ver más / Ver menos" que usa `useState` para mostrar u ocultar información extra.

## Tecnologías utilizadas

- React
- Vite
- JavaScript (JSX)
- Bootstrap (solo los estilos CSS)
- CSS

## Requisitos previos

Tener instalados **Node.js** y **npm**.

## Instalación

Clonar el repositorio y entrar a la carpeta:

```bash
git clone https://github.com/lucho-bot/tp1-portfolio-perondi-luciano.git
cd tp1-portfolio-perondi-luciano
```

Instalar las dependencias:

```bash
npm install
```

## Ejecución

```bash
npm run dev
```

Después abrir en el navegador la dirección que muestra la terminal, normalmente `http://localhost:5173`.

## Estructura del proyecto

```
src/
├── App.jsx              → componente raíz, arma la página
├── App.css              → estilos propios (hover de las tarjetas)
├── main.jsx             → punto de entrada, importa Bootstrap
└── components/
    ├── Header.jsx       → nombre y profesión (recibe props)
    ├── Hero.jsx         → bienvenida
    ├── About.jsx        → "Sobre mí" con Ver más / Ver menos
    ├── Skills.jsx       → habilidades generadas con map()
    ├── Projects.jsx     → lista de proyectos generada con map()
    ├── ProjectCard.jsx  → tarjeta reutilizable de un proyecto (recibe props)
    └── Footer.jsx       → contacto y copyright (recibe props)
```

## Conceptos de React aplicados

| Concepto | Dónde |
|---|---|
| Componentes propios | Carpeta `src/components/` |
| Props | `Header`, `Footer` y `ProjectCard` |
| Array de datos | `Skills.jsx` y `Projects.jsx` |
| `map()` con `key` | `Skills.jsx` (`key` = habilidad) y `Projects.jsx` (`key` = id del proyecto) |
| Evento `onClick` | Botón de `About.jsx` |
| `useState` | `About.jsx` |
| Renderizado condicional | `About.jsx` (`&&` para el texto extra y ternario para el texto del botón) |
| Responsive | Grilla de Bootstrap en `ProjectCard.jsx` (`col-md-6`) |

## Repositorio

https://github.com/lucho-bot/tp1-portfolio-perondi-luciano