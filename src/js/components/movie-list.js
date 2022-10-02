import { getGenres } from '../http/getGenres';
import { getMostPopularMovies } from '../http/getMostPopularMovies';
import { renderCard } from '../templates/movie-card';

const moviesWrapper = document.querySelector('.movie-list');

export const renderMovies = movies => {
  getGenres().then(({ genres }) => {
    const moviesHtml = movies
      .map(movie => {
        return renderCard(movie, genres);
      })
      .join('');

    moviesWrapper.innerHTML = moviesHtml;
  });
};

const renderMostPopularMovies = () => {
  getMostPopularMovies().then(({ results }) => {
    renderMovies(results);
  });
};

if (moviesWrapper) {
  renderMostPopularMovies();
}

export { moviesWrapper };
