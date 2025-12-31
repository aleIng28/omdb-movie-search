//Selecciono mis elementos HTML que ocupare (PUNTEROS)
const inputBusqueda = document.getElementById("input-busqueda");
const botonBuscar = document.querySelector("button");
const contenedorPeliculas = document.getElementById("contenedor-peliculas");
const modal = document.getElementById("modal-detalles");
const detallesPeli = document.getElementById("detalles-peli");
const botonCerrar = document.getElementById("cerrar-modal");

//Evento click para el boton de busqueda
// 1. Creamos una función que maneja la lógica de inicio de búsqueda
function ejecutarBusqueda() {
  const textoBusqueda = inputBusqueda.value;

  if (textoBusqueda === "") {
    alert("No has ingresado ningún texto");
    return;
  }

  llamarAPI(textoBusqueda);
}

// 2. El botón ahora solo llama a esa función
botonBuscar.addEventListener("click", () => {
  ejecutarBusqueda();
});

// 3. NUEVO: Escuchamos cuando se presiona una tecla en el input
inputBusqueda.addEventListener("keydown", (event) => {
  // Verificamos si la tecla presionada es "Enter"
  if (event.key === "Enter") {
    ejecutarBusqueda();
  }
});

//funcion de llamar a la API
async function llamarAPI(nombrePelicula) {
  // direccionde la API con la API KEY y el nombre de la pelicula
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${nombrePelicula}`;

  //esperamos la respuesta (await)
  const respuesta = await fetch(url);

  //convierto a JSON la respuesta para que sea legible por JS y tambien usamos await para esperar
  const datos = await respuesta.json();

  if (datos.Response === "True") {
    // Si la API encontró películas, pásale el arreglo (Search) a la función de mostrar
    mostrarPeliculas(datos.Search);
  } else {
    // Si no encontró nada (ejemplo: escribiste "asdfg"), muestra un mensaje
    contenedorPeliculas.innerHTML = `<p>No se encontró la película: ${nombrePelicula}</p>`;
  }
}

function mostrarPeliculas(peliculas) {
  // A. Limpiamos el contenedor antes de mostrar nuevos resultados
  contenedorPeliculas.innerHTML = "";

  // B. Recorremos el arreglo de películas con un bucle (forEach)
  peliculas.forEach((peli) => {
    // C. Creamos un "molde" de HTML para cada película
    const tarjeta = `
    <div class="pelicula" onclick="obtenerMasDetalles('${peli.imdbID}')">
     <img src="${peli.Poster}" alt="${peli.Title}">
        <div class="pelicula-info"> <h3>${peli.Title}</h3>
            <p>Año: ${peli.Year}</p>
        </div>
    </div>
`;

    // D. Inyectamos la tarjeta en nuestro contenedor del HTML
    contenedorPeliculas.innerHTML += tarjeta;
  });
  inputBusqueda.value = "";
}

async function obtenerMasDetalles(id) {
  // 1. Nueva URL usando 'i=' en lugar de 's='
  const url = `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`;

  const respuesta = await fetch(url);
  const peli = await respuesta.json();

  // 2. Inyectamos la info detallada en el modal
  detallesPeli.innerHTML = `
  <div class="modal-peli">
    
    <img src="${peli.Poster}" alt="${peli.Title}" class="poster">

    <div class="info">
      <h2>${peli.Title}</h2>

      <div class="meta">
        <span>⭐ ${peli.imdbRating}</span>
        <span>🏆 ${peli.Awards}</span>
      </div>

      <div class="bloque">
        <h4>🎭 Actores</h4>
        <p>${peli.Actors}</p>
      </div>

      <div class="bloque">
        <h4>📝 Sinopsis</h4>
        <p>${peli.Plot}</p>
      </div>

    </div>
  </div>
`;

  // 3. Mostramos el modal
  modal.style.display = "block";
}

// 4. Lógica para cerrar el modal
botonCerrar.onclick = () => (modal.style.display = "none");
window.onclick = (event) => {
  if (event.target == modal) modal.style.display = "none";
};
