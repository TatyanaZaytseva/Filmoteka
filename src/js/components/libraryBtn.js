import { refs } from './refs.js';
import { STORAGE_KEY_WATCHED } from '../globals.js';
import { STORAGE_KEY_QUEUE } from '../globals.js';
import { renderMovieDetails } from '../templates/movie-details.js';
import { renderCard } from '../templates/movie-card.js';
import { IMAGE_URL } from '../globals';
import { getGenres } from '../http/getGenres';
import { moviesWrapper, renderMovies } from './movie-list';

// console.log(document.title);
// if (document.title === 'My Library') {
refs.watchedBtn.addEventListener('click', onClickBtnWatched);
refs.queueBtn.addEventListener('click', onClickBtnQueue);
// }
// console.log(refs.library);

function onClickBtnWatched() {
  // console.log('click', 'watched');

  const watchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
  //   renderMovieDetails();

  if (watchedFilms) {
    refs.emptyPage.classList.add('visually-hidden');
    const renderWatchedFilms = watchedFilms
      .map(({ title, id, poster_path, release_date, genres, vote_average }) => {
        // console.log(genres);
        return `  <li class="library-card">
      <article class="library-card__article library-item-js" data-id="${id}">
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
      .join(' ');
    // console.log(renderWatchedFilms);
    // renderCard();
    // onRenderFilmLibrary(watchedFilms);
    refs.library.innerHTML = renderWatchedFilms;
  }
}

function onClickBtnQueue() {
  console.log('click', 'queue');
  const queueFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
  if (queueFilms) {
    const renderQueueFilms = queueFilms
      .map(({ title, id, poster_path, release_date, genres, vote_average }) => {
        return `  <li class="library-card">
      <article class="library-card__article library-item-js" data-id="${id}">
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
      .join(' ');
    // console.log(renderQueueFilms);

    // renderCard();
    refs.library.innerHTML = renderQueueFilms;
  }
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
