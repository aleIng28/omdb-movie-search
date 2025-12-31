# 🎬 Buscador de Películas (CineFilm)

Este es un proyecto interactivo desarrollado con **JavaScript Vanilla** que consume la API de **OMDb** para buscar información detallada sobre películas y series en tiempo real. Es una aplicación diseñada para demostrar el manejo de peticiones asíncronas y manipulación dinámica del DOM.

## 🚀 Características
* **Búsqueda Dinámica**: Encuentra películas por título conectándote a una base de datos externa.
* **Experiencia de Usuario (UX)**: Interfaz intuitiva con soporte para búsqueda mediante la tecla `Enter`.
* **Detalles Expandidos**: Sistema de **Modales** que muestra información extra (Rating de IMDb, Actores y Sinopsis completa) sin recargar la página.
* **Diseño Responsivo**: Galería moderna adaptada a dispositivos móviles, tablets y escritorio usando **CSS Grid**.
* **Efectos Visuales**: Animaciones de entrada (`fade-in`) y efectos de hover en las tarjetas de películas.

## 🛠️ Tecnologías Utilizadas
* **HTML5**: Estructura semántica para accesibilidad.
* **CSS3**: 
    * Arquitectura basada en **Variables CSS**.
    * Layouts con **Flexbox** y **CSS Grid**.
    * Animaciones con `@keyframes`.
* **JavaScript (ES6+)**: 
    * Consumo de APIs con `Fetch`.
    * Control de flujo con `Async/Await`.
    * Gestión de eventos y lógica de filtrado.

## 🛡️ Nota sobre la Seguridad (API Key)
> [!IMPORTANT]
> **Aviso de Seguridad**: En este proyecto, la `API_KEY` se encuentra visible en el archivo `config.js`. Soy consciente de que, en un entorno de producción real, las credenciales nunca deben exponerse en el Frontend.
>
> Para fines de este **portfolio**, he decidido mantener la clave expuesta para que la aplicación sea **totalmente funcional** desde el despliegue en GitHub Pages sin necesidad de configuración adicional por parte del reclutador. En aplicaciones escalables, este manejo se realizaría a través de un **Backend Proxy** o **Serverless Functions** para proteger la integridad de las llaves.

## 📦 Instalación Local
Si deseas probar este proyecto en tu máquina local:
1. Clona el repositorio:
   ```bash
   git clone [https://github.com/aleIng28/omdb-movie-search.git](https://github.com/aleIng28/omdb-movie-search.git)
