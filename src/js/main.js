import { renderMostPopularMovies } from './components/movie-list';
import { showScrollBtn } from './components/scrollUpBtn';
import './components/modal';

window.addEventListener('scroll', showScrollBtn);

renderMostPopularMovies();
