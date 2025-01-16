
// Función para generar las cartas
export function createCards(films, container) {
    films.forEach((film) => {
      // Crear el contenedor principal de la carta
      const card = document.createElement("div");
      card.className = "movie-card";

      // Crear el contenido de la carta
      card.innerHTML = `
        <img class="img-card" src="${film.image}" alt="${film.title}">
        <div class="content">
          <h2 class="title-card">${film.title}</h2>
          <button class="ver-mas-btn">Ver más</button>
          </div>
          `;
          
          container.appendChild(card);
        });
    }
    //   <p class="genre">Genres: ${film.genre.join(", ")}</p>
    //   <p class="release-date">Release Date: ${film.releaseDate}</p>
    //   <p class="duration">Duration: ${film.duration}</p>
    //   <p class="actors">Cast: ${film.casting.join(", ")}</p>