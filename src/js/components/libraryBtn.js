import { refs } from './refs.js';
import { STORAGE_KEY_WATCHED } from '../globals.js';
import { STORAGE_KEY_QUEUE } from '../globals.js';
import { renderMovieDetails } from '../templates/movie-details.js';
import { renderCard } from '../templates/movie-card.js';
import { IMAGE_URL } from '../globals';
import { getGenres } from '../http/getGenres';
import { moviesWrapper, renderMovies } from './movie-list';

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
    const test = watchedFilms.map(
      ({ title, id, poster_path, release_date, genres, vote_average }) => {
        console.log(genres);
        return `  <li class="movie-card">
      <article class="movie-card__article movie-item-js" data-id="${id}">
        <img width="440" height="660" class="movie-card__img" src="${IMAGE_URL}${poster_path}">
        <div class="movie-card__header">
          <h2 class="movie-card__title">${title}</h2>
          <div class="movie-card__info">
            ${genres
              .map(item => item.name)
              .join(' ')} | ${release_date.substring(0, 4)}
          </div>
                    <div>${vote_average}</div>

        </div>
      </article>
    </li>`;
      }
    );
    console.log(watchedFilms);
    // renderCard();
    // onRenderFilmLibrary(watchedFilms);
    refs.library.innerHTML = test;
  }
}

function onClickBtnQueue() {
  console.log('click', 'queue');
  const queueFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_QUEUE));
  if (queueFilms) {
    console.log(queueFilms);

    // renderCard();
    // refs.library.innerHTML = test;
  }
}

// console.log(watchedFilms);
// const ansver = function (movie, genres) {
//   renderCard();
// };

// return test

// debugger;
// return sam(movie, movie.genres);
//   });
// }

// const renderCardLibr = ({ title }) =>
//     {
//         const currentTitle = title.map(t => {
//             return t.find(t => title === t);
//         });

//         return `
//     <li class="movie-card">
//       <article class="movie-card__article movie-item-js" data-id="${movie.id}">
//         <img width="440" height="660" class="movie-card__img" src="${IMAGE_URL}${movie.poster_path
//             }">
//         <div class="movie-card__header">
//           <h2 class="movie-card__title">${movie.title}</h2>
//           <div class="movie-card__info">
//             ${currentGenres.join(', ')} | ${movie.release_date.substring(0, 4)}
//           </div>
//         </div>
//       </article>
//     </li>
//   `;
//     };
// }
// function renderTitle(movies) {
//   return movies
//     .map(({ title, id }) => {
//       return `<li class="movie-card">
//       <article class="movie-card__article movie-item-js" data-id="${id}">
//         <img width="440" height="660" class="movie-card__img" \>
//         <div class="movie-card__header">
//           <h2 class="movie-card__title">${title}</h2>
//           <div class="movie-card__info">
//           </div>
//         </div>
//       </article>
//     </li>`;
//     })
//     .join('');
// }
// console.log(renderTitle());

// console.log(refs.watchedBtn);
// console.log(renderCard);
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
