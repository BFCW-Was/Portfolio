# **Versiones:**

## 0.4.0 (100%): Componentes de Diseño | 2026-11-10

### Added

- Adición de isologo, logotipo, signature, certified y webicon como "Logos" del proyecto.
- Implementación de Gestor de Assets (centralización de title, alt y path de assets).
- Implementación de Language Selector.
- Implementación de Footer diseñado en Figma.
- Implementación de Navbar flotante diseñada en Figma.
- Implementación de componente InkBlob para efectos de fondo.
- Implementación de componentes visuales basicos diseñados en Figma (cards, buttons, selectors, timelines, etc).
- Implementación de estilos SCSS globales decorativos para elementos de la web (title, ring, border, etc).

### Changed

- Finalización de Theme Mode Selector.
- Cambio de font de la web y selección de fonts alternativas (títulos, dislexia y código).
- Mejora en encuadre general de la web y responsividad con elementos circundantes.
- Cambio de logo de la web.
- Revisión menor en paletas de colores.
- Revisión mayor en paletas de colores de componentes.
- Adición de variables de color para los themes en el CSS global.
- Adición de variables de radio de borde al CSS global.
- Cambio en convención de elementos HTML bases:
    - El layout mantiene un "main" como contenedor global de las páginas.
    - Cada página tiene un "section" con contenido específico.
    - Los "div" se usan para agrupar elementos dentro de paginas o componentes.
- Mejora en responsividad de componentes.
- Reestructuración de carpeta de componentes.

### Fixed

- Corrección de visualización del logo en la pestaña del navegador.

## 0.4.1 (100%): Corrección Menor en README | 2026-11-10

### Fixed

- Corrección de enlace a imagen del logo en el README.

## 0.4.2 (100%): Adición y Refactorización de Estilos SCSS | 2026-11-12

### Added

- Nuevo tipo de TimelineStep con label y sin paso numérico.
- Adición de animación en Timelines.
- Adición de animación en ItemSelector.
- Adición de estilo SCSS para animación de hover en componentes (hover).

### Changed

- Centralización de estilos SCSS decorativos en configuración global de Nuxt.
