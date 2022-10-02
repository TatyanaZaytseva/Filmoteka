import { refs } from './refs.js';
import { STORAGE_KEY_WATCHED } from '../globals.js';
import { STORAGE_KEY_QUEUE } from '../globals.js';
import { renderMovieDetails } from '../templates/movie-details.js';
import { renderCard } from '../templates/movie-card.js';
import { IMAGE_URL } from '../globals';
import { getGenres } from '../http/getGenres';
import { moviesWrapper, renderMovies } from './movie-list';

if (refs.watchedBtn) {
  refs.watchedBtn.addEventListener('click', onClickBtnWatched);
}

if (refs.queueBtn) {
  refs.queueBtn.addEventListener('click', onClickBtnQueue);
}


function onClickBtnWatched() {
  const watchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));

  if (watchedFilms) {
    refs.emptyPage.classList.add('visually-hidden');
    const renderWatchedFilms = watchedFilms
      .map(({ title, id, poster_path, release_date, genres, vote_average }) => {
        return `<li class="library-card">
          <article class="library-card__article movie-item-js" data-id="${id}">
            <img width="440" height="660" class="library-card__img" src="${IMAGE_URL}${poster_path}">
            <div class="library-card__header">
              <h2 class="library-card__title">${title}</h2>
              <div class="library-card__description">
                <div class="library-card__info">
                  ${genres
                    .map(item => item.name)
                    .join(' ')} | ${release_date.substring(0, 4)}
                </div>
                <div class="library-card__rating">${vote_average}</div>
              </div>
            </div>
          </article>
        </li>`;
      })
      .join('');

    hideNoMoviesBlock();
    refs.library.innerHTML = renderWatchedFilms;
  } else {
    refs.library.innerHTML = '';
    showNoMoviesBlock();
  }
}

function onClickBtnQueue() {
  const queueFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));

  if (queueFilms) {
    const renderQueueFilms = queueFilms
      .map(({ title, id, poster_path, release_date, genres, vote_average }) => {
        return `<li class="library-card">
          <article class="library-card__article movie-item-js" data-id="${id}">
            <img width="440" height="660" class="library-card__img" src="${IMAGE_URL}${poster_path}">
            <div class="library-card__header">
              <h2 class="library-card__title">${title}</h2>
              <div class="library-card__description">
                <div class="library-card__info">
                  ${genres
                    .map(item => item.name)
                    .join(' ')} | ${release_date.substring(0, 4)}
                </div>
                <div class="library-card__rating">${vote_average}</div>
              </div>
            </div>
          </article>
        </li>`;
      })
      .join('');

    hideNoMoviesBlock();
    refs.library.innerHTML = renderQueueFilms;
  } else {
    refs.library.innerHTML = '';
    showNoMoviesBlock();
  }
}

function hideNoMoviesBlock() {
  refs.emptyPage.classList.add('visually-hidden');
}

function showNoMoviesBlock() {
  refs.emptyPage.classList.remove('visually-hidden');
}

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