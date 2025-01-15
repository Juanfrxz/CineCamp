
// Función para generar las cartas
export function createCards(films, container) {
    films.forEach((film) => {
      // Crear el contenedor principal de la carta
      const card = document.createElement("div");
      card.className = "movie-card";

      // Crear el contenido de la carta
      card.innerHTML = `
        <img src="https://via.placeholder.com/300x200?text=${encodeURIComponent(film.title)}" alt="${film.title}">
        <div class="content">
          <h2>${film.title}</h2>
          <p>${film.summary}</p>
          <p class="genre">Genres: ${film.genre.join(", ")}</p>
          <p class="release-date">Release Date: ${film.releaseDate}</p>
          <p class="duration">Duration: ${film.duration}</p>
          <p class="actors">Cast: ${film.casting.join(", ")}</p>
        </div>
      `;

      container.appendChild(card);
    });
  }