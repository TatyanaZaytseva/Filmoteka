import { fetchFilm } from '../fetchFilm';
import { renderMovies } from './movie-list';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const searchFormInput = document.querySelector('.header__form-input');
const searchBtn = document.querySelector('.header__search-btn');
const moviesWrapper = document.querySelector('.movie-list');
const errorMessage = document.querySelector('.error__message');

searchBtn.addEventListener('click', onSearchBtnClick);

async function onSearchBtnClick(e) {
  e.preventDefault();
  cleanGallery();
  const inputValue = searchFormInput.value.trim();

  if (inputValue === '') {
    return;
  }

  try {
    const { results } = await fetchFilm(inputValue);
    Loading.dots({
      svgSize: '150px',
      svgColor: '#ff6b08',
    });
    if (results.length === 0) {
      errorMessage.style.display = 'block';
    } else {
      Loading.remove(400);
      errorMessage.style.display = 'none';
      renderMovies(results);
    }
  } catch {
    errorMessage.style.display = 'block';
  } finally {
    // decided to avoid input reset. For example, google search doesn't.
    // searchFormInput.value = '';
  }
}

function cleanGallery() {
  moviesWrapper.innerHTML = '';
}
