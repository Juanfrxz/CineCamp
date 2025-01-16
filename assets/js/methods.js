// Función para generar las cartas
export function createCards(films, container) {
  films.forEach((film) => {
    // Crear el contenedor principal de la carta
    const card = document.createElement("div");
    card.className = "movie-card";

    // Crear el contenido de la carta
    card.innerHTML = /*html*/ `
        <img class="img-card" src="${film.image}" alt="${film.title}">
        <div class="content">
          <h2 class="title-card">${film.title}</h2>
          <p>${film.summary}</p>
          <button class="ver-mas-btn">Ver más</button>
          </div>
          
          `;

    container.appendChild(card);

    const button = card.querySelector(".ver-mas-btn");
    button.addEventListener("click", () => {
      openModal(film);
    });
  });
}
//   <p class="genre">Genres: ${film.genre.join(", ")}</p>
//   <p class="release-date">Release Date: ${film.releaseDate}</p>
//   <p class="duration">Duration: ${film.duration}</p>
//   <p class="actors">Cast: ${film.casting.join(", ")}</p>

function openModal(film) {
  const modal = document.createElement("div");
  modal.className = "modal-overlay";
  modal.innerHTML = /*html*/ `
          <div class="modal-content">
              <span class="close-btn">&times;</span>
              <h2>${film.title}</h2>
              <img src="${film.image}" alt="${film.title}" class="modal-img">
              <p>${film.summary}</p>
              <p class="genre">Genres: ${film.genre.join(", ")}</p>
    <p class="release-date">Release Date: ${film.releaseDate}</p>
    <p class="duration">Duration: ${film.duration}</p>
    <p class="actors">Cast: ${film.casting.join(", ")}</p>
          </div>
      `;

  document.body.appendChild(modal);

  // Cerrar el modal al hacer clic en el botón de cierre
  modal.querySelector(".close-btn").addEventListener("click", () => {
    modal.remove();
  });

  // Cerrar el modal al hacer clic fuera del contenido
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.remove();
    }
  });
}
