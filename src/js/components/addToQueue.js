import { refs } from './refs';
import { STORAGE_KEY_QUEUE } from '../globals';

if (refs.modal.classList.contains('visually-hidden')) {
  refs.addToQueueBtn.removeEventListener('click', onAddToQueueBtnClick);
}

refs.addToQueueBtn.addEventListener('click', onAddToQueueBtnClick);

function onAddToQueueBtnClick(event) {
  console.log(event);
  setInLocalStorage();
  refs.addToQueueBtn.setAttribute('disabled', '');
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
