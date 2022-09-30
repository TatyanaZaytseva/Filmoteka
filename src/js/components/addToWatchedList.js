import { refs } from './refs';
import { STORAGE_KEY } from '../globals';

if (refs.modal.classList.contains('visually-hidden')) {
  refs.addToWatchedBtn.removeEventListener('click', onAddToWatchedBtnClick);
}

refs.addToWatchedBtn.addEventListener('click', onAddToWatchedBtnClick);

function onAddToWatchedBtnClick(event) {
  console.log(event);
  setInLocalStorage();
  refs.addToWatchedBtn.setAttribute('disabled', '');
}

function setInLocalStorage(id) {
  const savedMovies = localStorage.getItem(STORAGE_KEY);
  if (!id) return;
  if (!savedMovies) {
    const data = [id];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } else {
    const parsedMovies = JSON.parse(savedMovies);
    parsedMovies.push(id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedMovies));
  }
}
