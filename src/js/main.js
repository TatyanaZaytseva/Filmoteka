import { renderMostPopularMovies } from './components/movie-list';
import { showScrollBtn } from './components/scrollUpBtn';

window.addEventListener('scroll', showScrollBtn);

renderMostPopularMovies();
