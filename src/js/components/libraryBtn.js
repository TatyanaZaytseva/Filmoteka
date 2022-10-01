import { refs } from './refs.js';
import { STORAGE_KEY_WATCHED } from '../globals.js';
import { STORAGE_KEY_QUEUE } from '../globals.js';
import { renderMovieDetails } from '../templates/movie-details.js';
import { renderCard } from '../templates/movie-card.js';
// import { IMAGE_URL } from '../globals';
import { getGenres } from '../http/getGenres';

console.log(refs.watchedBtn);
// console.log(STORAGE_KEY);
// if (pageName.includes('MY')) {

//   if (watchedFilms) {
//     refs.library = watchedFilms;
//   }
// if (document.title === 'Filmoteka') {
//   refs.watchedBtn === disabled;
// }
console.log(document.title);
// if (document.title === 'My Library') {
refs.watchedBtn.addEventListener('click', onClickBtnWatched);
refs.queueBtn.addEventListener('click', onClickBtnQueue);
// }
console.log(refs.library);

function onClickBtnWatched(movies) {
  console.log('click', 'watched');
  //   console.log(localStorage.getItem(STORAGE_KEY_WATCHED));

  const watchedFilms = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
  // let result = {};
  //   renderMovieDetails();
  if (watchedFilms) {
    console.log(watchedFilms);
    // refs.library = watchedFilms;
    // return result;
    // renderCard();
    refs.library.innerHTML = watchedFilms;
  }
}

function onClickBtnQueue() {
  console.log('click', 'queue');
}

// function onRenderFilmLibrary() {
//   renderMovies();
// }
//   let genres = Object.keys(localStorage).map(id => {
//     return genres.find(genre => genre.id === id).name;
//   });
//   STORAGE_KEY_WATCHED.map(({ poster_path, title }) => {
//     return `<li class="movie-card">
//         < article class="movie-card__article" >
//         <a class="movie-card__link" href="">
//           <img width="440" height="660" class="movie-card__img" src="${
//             STORAGE_KEY_WATCHED.poster_path
//           }">
//         </a>
//         <div class="movie-card__header">
//           <a href="">
//             <h2 class="movie-card__title">${STORAGE_KEY_WATCHED.title}</h2>
//           </a>
//           <div class="movie-card__info">
//             ${valuesId.join(
//               ', '
//             )} | ${STORAGE_KEY_WATCHED.release_date.substring(0, 4)}
//           </div>
//         </div>
//       </>
//     </li>`;
//   }).join('');
// }
