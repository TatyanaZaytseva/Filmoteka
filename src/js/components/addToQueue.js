import { refs } from './refs';
import { STORAGE_KEY_QUEUE } from '../globals';

let btn;

function onAddToQueueBtnClick(movie) {
  console.log(movie);
  setInLocalStorage();
  btn.setAttribute('disabled', '');
}

function setInLocalStorage(id) {
  const savedMovies = localStorage.getItem(STORAGE_KEY_QUEUE);
  if (!id) return;
  if (!savedMovies) {
    const data = [id];
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(data));
  } else {
    const parsedMovies = JSON.parse(savedMovies);
    parsedMovies.push(id);
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(parsedMovies));
  }
}

export function addToQueueBtnClickListener(movie) {
  btn = document.querySelector('.add-to-queue');
  btn.addEventListener('click', () => {
    onAddToQueueBtnClick(movie)
  });
}
