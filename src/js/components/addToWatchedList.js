// import { refs } from './refs';
import { STORAGE_KEY_WATCHED } from '../globals';
console.log(STORAGE_KEY_WATCHED);

let btn;

function onAddToWatchedBtnClick(movie) {
  setInLocalStorage(movie);
  if (btn.textContent === 'remove from Watched') {
    btn.textContent = 'add to Watched';
  } else {
    btn.textContent = 'remove from Watched';
  }
}

function setInLocalStorage(movie) {
  const savedMovies = localStorage.getItem(STORAGE_KEY_WATCHED);
  if (!movie) return;
  if (!savedMovies) {
    const data = [movie];
    localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(data));
  } else {
    // return;
    const parsedMovies = JSON.parse(savedMovies);
    parsedMovies.push(movie);
    localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(parsedMovies));
  }
}

export function addToWatchedBtnClickListener(movie) {
  btn = document.querySelector('.add-to-watched');
  btn.addEventListener('click', () => {
    onAddToWatchedBtnClick(movie);
  });
}
