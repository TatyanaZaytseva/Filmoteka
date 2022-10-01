import { refs } from './refs.js';
import { STORAGE_KEY_WATCHED } from '../globals.js';
import { STORAGE_KEY_QUEUE } from '../globals.js';
import { renderMovieDetails } from '../templates/movie-details.js';
import { renderCard } from '../templates/movie-card.js';
// import { IMAGE_URL } from '../globals';
import { getGenres } from '../http/getGenres';
import { renderMovies } from './movie-list';

console.log(refs.watchedBtn);

// if (document.title === 'Filmoteka') {
//   refs.watchedBtn === disabled;
// }
// function isLibrary() {
//   const pageName = document.location.pathname;
//     if (pageName.includes('library')) {
//     }
//   else {
//  refs.watchedBtn.removeEventListener('click');
//   refs.queueBtn.removeEventListener('click');}

console.log(document.title);
// if (document.title === 'My Library') {
refs.watchedBtn.addEventListener('click', onClickBtnWatched);
refs.queueBtn.addEventListener('click', onClickBtnQueue);
// }
console.log(refs.library);

function onClickBtnWatched() {
  console.log('click', 'watched');

  const watchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
  //   renderMovieDetails();
  if (watchedFilms) {
    console.log(watchedFilms);
    // renderCard();
    onRenderFilmLibrary();
    refs.library.innerHTML = watchedFilms;
  }
}

function onClickBtnQueue() {
  console.log('click', 'queue');
  const queueFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
  if (queueFilms) {
    console.log(queueFilms);

    // renderCard();
    refs.library.innerHTML = queueFilms;
  }
}

function onRenderFilmLibrary() {
  renderMovies();
}
