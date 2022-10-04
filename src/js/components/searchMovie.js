import { fetchFilm } from '../fetchFilm';
import { renderMovies } from './movie-list';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { pagination } from './pagination';

const searchFormInput = document.querySelector('.header__form-input');
const searchBtn = document.querySelector('.header__search-btn');
const moviesWrapper = document.querySelector('.movie-list');
const errorMessage = document.querySelector('.error__message');

let isNewSearch = true;

// searchBtn.addEventListener("click", onSearchBtnClick)

if (searchBtn) {
  searchBtn.addEventListener('click', onSearchBtnClick);
}

let lastInputValue;

export async function fetchSearchResults(inputValue, page) {
  try {
    const { results, total_results } = await fetchFilm(
      inputValue || lastInputValue,
      page
    );

    if (results.length === 0) {
      errorMessage.style.display = 'block';
    } else {
      errorMessage.style.display = 'none';
      renderMovies(results);

      if (isNewSearch) {
        isNewSearch = false;
        pagination._paginate(1);
        pagination.reset(total_results);
      }
    }
    Loading.dots({
      svgSize: '150px',
      svgColor: '#ff6b08',
    });
    Loading.remove();
  } catch {
    errorMessage.style.display = 'block';
  } finally {
    // decided to avoid input reset. For example, google search doesn't.
    // searchFormInput.value = '';
  }
}

async function onSearchBtnClick(e) {
  document.body.dataset.paginationMode = 'search';
  e.preventDefault();
  cleanGallery();
  isNewSearch = true;
  const inputValue = searchFormInput.value.trim();

  if (inputValue === '') {
    return;
  }
  lastInputValue = inputValue;
  fetchSearchResults(inputValue);
}

function cleanGallery() {
  moviesWrapper.innerHTML = '';
}

// import { fetchFilm } from "../fetchFilm"
// import { renderMovies } from "./movie-list";

// const searchFormInput = document.querySelector(".header__form-input")
// const searchBtn = document.querySelector(".header__search-btn")
// const moviesWrapper = document.querySelector('.movie-list');

// searchBtn.addEventListener("click", onSearchBtnClick)

// async function onSearchBtnClick(e) {
//     e.preventDefault();
//     cleanGallery()
//     const inputValue = searchFormInput.value.trim()

//     if (inputValue === '') {
//     return;
//   }

//     const data = await fetchFilm(inputValue)
//     const { results } = data

//     if (results.lenght === 0) {

//     }
//     renderMovies(results)
//     searchFormInput.value = ""
// }

// function cleanGallery() {
//     moviesWrapper.innerHTML = ""
// }

// function renderCard(movie) {
//     getGenres().then(({ genres }) => {
//         const markup = movie.map(({ poster_path, title, release_date }) => {
//             return `
//     <li class="movie-card">
//       <article class="movie-card__article">
//         <a class="movie-card__link" href="">
//           <img width="440" height="660" class="movie-card__img" src="${IMAGE_URL}${poster_path}">
//         </a>
//         <div class="movie-card__header">
//           <a href="">
//             <h2 class="movie-card__title">${title}</h2>
//           </a>
//           <div class="movie-card__info">
//             ${genres} | ${release_date}
//           </div>
//         </div>
//       </article>
//     </li>
//   `;
//         }
//         )
//             .join('')
//         moviesWrapper.innerHTML += markup
//     })
// }

// function renderCard(movie) {
//     const markup = movie.map(({poster_path, title, genre_ids, release_date}) => {
//         return `
//     <li class="movie-card">
//       <article class="movie-card__article">
//         <a class="movie-card__link" href="">
//           <img width="440" height="660" class="movie-card__img" src="${IMAGE_URL}${poster_path}">
//         </a>
//         <div class="movie-card__header">
//           <a href="">
//             <h2 class="movie-card__title">${title}</h2>
//           </a>
//           <div class="movie-card__info">
//             ${genre_ids} |
//           </div>
//         </div>
//       </article>
//     </li>
//   `;
//         }
//     )
//         .join('')
//     moviesWrapper.innerHTML += markup
// }
