import { STORAGE_KEY_QUEUE } from '../globals';

let btn;

function onAddToQueueBtnClick(movie) {
  console.log(movie);
  setInLocalStorage(movie);
  // if (btn.textContent === 'remove from Queue') {
  //   btn.textContent = 'add to Queue';
  // } else {
  btn.textContent = 'remove from Queue';
  // }
  removeInLocalStorage(movie);
  btn.textContent = 'add to Queue';
}

function setInLocalStorage(movie) {
  // console.log(movie);
  const savedMovies = localStorage.getItem(STORAGE_KEY_QUEUE);
  if (!movie) return;
  if (!savedMovies) {
    const data = [movie];
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(data));
  } else {
    const parsedMovies = JSON.parse(savedMovies);
    parsedMovies.push(movie);
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(parsedMovies));
  }
}

function removeInLocalStorage(movie) {
  const savedMovies = localStorage.getItem(STORAGE_KEY_QUEUE);
  const parsedMovies = JSON.parse(savedMovies);
  if (parsedMovies.includes(movie)) {
    const index = parsedMovies.indexOf(movie);
    const newMovies = parsedMovies.splice(index, 1);
    localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(newMovies));
  }
  return;
}

export function addToQueueBtnClickListener(movie) {
  btn = document.querySelector('.add-to-queue');
  btn.addEventListener('click', () => {
    onAddToQueueBtnClick(movie);
  });
}
