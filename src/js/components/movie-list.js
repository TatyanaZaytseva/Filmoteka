import { getGenres } from '../http/getGenres';
import { getMostPopularMovies } from '../http/getMostPopularMovies';
import { renderCard } from '../templates/movie-card';
import { pagination } from './pagination';
import { refs } from './refs';

const moviesWrapper = document.querySelector('.movie-list');
let isFirstLoad = true;

export const renderMovies = (movies) => {
  getGenres().then(({ genres }) => {
    const moviesHtml = movies
      .map(movie => {
        return renderCard(movie, genres);
      })
      .join('');

    refs.movieList.innerHTML = moviesHtml;
  });
};

export const renderMostPopularMovies = (page = 1) => {
  getMostPopularMovies(page).then(({ results, total_results }) => {
    renderMovies(results, total_results);

    if (isFirstLoad) {
      pagination.reset(total_results);
      isFirstLoad = false;
    }
  });
};

if (moviesWrapper) {
  renderMostPopularMovies();
}

export { moviesWrapper };
