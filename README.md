<!-- Imagen -->
![Responsive Product Page](https://www.ds3comunicaciones.com/Logo1.jpg)

# Proyecto: Página de Producto Responsiva - DS3

Este proyecto es una prueba técnica para el desarrollo de una página de producto completamente responsiva, partiendo de un diseño no-responsivo existente y utilizando un código de referencia como base. El objetivo es demostrar habilidades de desarrollo front-end de nivel mid-level, aplicando buenas prácticas y tecnologías modernas.

## Stack Tecnológico

- **Framework:** [Next.js](https://nextjs.org/) (con App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/)
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/)
- **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/)
- **Linting:** ESLint
- **Íconos:** React Icons

## Características Implementadas

- **Diseño Absolutamente Responsivo:** La página se adapta fluidamente a todos los tamaños de pantalla, desde móviles pequeños hasta monitores de escritorio grandes.
- **Enfoque Mobile-First:** El diseño se construyó desde la perspectiva móvil hacia arriba, garantizando una experiencia de usuario óptima en los dispositivos más comunes.
- **Componentes Reutilizables:** La interfaz se ha dividido en componentes lógicos (Header, Footer, Sidebar, etc.) para una mejor mantenibilidad.
- **Interfaz de Usuario Premium:** Se utilizó `shadcn/ui` para implementar componentes pulidos como botones, pestañas y tarjetas, logrando un acabado estético de alta calidad.
- **Interactividad del Lado del Cliente:** Funcionalidades como la galería de imágenes, el sistema de pestañas y el menú lateral móvil se manejan con React Hooks (`useState`).
- **Layout Moderno:** Se utiliza CSS Grid y Flexbox para crear layouts complejos y robustos (ej. sidebar + contenido principal).

## Cómo Ejecutar el Proyecto

1.  **Clonar el repositorio (si aplica):**
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    cd mi-proyecto-responsive
    ```

2.  **Instalar dependencias:**
    Asegúrate de tener Node.js (v18+) instalado.
    ```bash
    npm install
    ```
    o si usas Yarn:
    ```bash
    yarn
    ```

3.  **Ejecutar el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    o
    ```bash
    yarn dev
    ```

4.  **Abrir la aplicación:**
    Abre tu navegador y visita [http://localhost:3000](http://localhost:3000).

## Estructura del Proyecto

- **/f:** Contiene las rutas y la lógica principal de la aplicación (App Router de Next.js).
  - `page.tsx`: El componente principal de la página de producto.
  - `globals.css`: Estilos globales de Tailwind CSS.
- **/components/ui:** Componentes de la librería `shadcn/ui` añadidos al proyecto.
- **/app/shared/components:** Componentes reutilizables específicos de la aplicación (Header, Footer, MobileMenu).
- **/lib:** Utilidades, como la función `cn` de `shadcn`.
- **/public:** Archivos estáticos (imágenes, fuentes).