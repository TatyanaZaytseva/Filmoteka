import { IMAGE_URL } from '../globals';

export const renderCard = (movie, genres) => {
  const currentGenres = movie.genre_ids.map(id => {
    return genres.find(genre => genre.id === id).name;
  });

  return `
    <li class="movie-card">
      <article class="movie-card__article">
        <a class="movie-card__link" href="">
          <img width="440" height="660" class="movie-card__img" src="${IMAGE_URL}${
    movie.poster_path
  }">
        </a>
        <div class="movie-card__header">
          <a href="">
            <h2 class="movie-card__title">${movie.title}</h2>
          </a>
          <div class="movie-card__info">
            ${currentGenres.join(', ')} | ${movie.release_date.substring(0, 4)}
          </div>
        </div>
      </article>
    </li>
  `;
};
