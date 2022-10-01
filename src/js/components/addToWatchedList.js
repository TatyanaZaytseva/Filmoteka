import { STORAGE_KEY_WATCHED } from '../globals';

let btn;

export function addToWatchedBtnClickListener(movie) {
  btn = document.querySelector('.add-to-watched');
  if (checkMovieIsInList(movie.id)) {
    btn.textContent = 'remove from Queue';
  }
  btn.addEventListener('click', () => {
    onAddToWatchedBtnClick(movie);
  });
}

function onAddToWatchedBtnClick(movie) {
  if (btn.textContent === 'remove from Queue') {
    removeInLocalStorage(movie);
    btn.textContent = 'add to Queue';
  } else {
    setInLocalStorage(movie);
    btn.textContent = 'remove from Queue';
  }
}

function checkMovieIsInList(movieId) {
  const savedMovies = JSON.parse(localStorage.getItem(STORAGE_KEY_WATCHED));
  if (!savedMovies) {
    return false;
  }
  const movieIsInList = savedMovies.some(({ id }) => id === movieId);
  console.log(movieIsInList);
  return movieIsInList;
}

function setInLocalStorage(movie) {
  const savedMovies = localStorage.getItem(STORAGE_KEY_WATCHED);
  if (!movie) return;
  if (!savedMovies) {
    const data = [movie];
    localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(data));
  } else {
    const parsedMovies = JSON.parse(savedMovies);
    parsedMovies.push(movie);
    localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(parsedMovies));
  }
}

function removeInLocalStorage(movie) {
  const savedMovies = localStorage.getItem(STORAGE_KEY_WATCHED);
  const parsedMovies = JSON.parse(savedMovies);
  console.log(parsedMovies);
  const MOVIE_ID = movie.id;
  const index = parsedMovies.findIndex(movie => movie.id === MOVIE_ID);
  if (index !== -1) {
    const newMovies = parsedMovies.splice(index, 1);
    localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(parsedMovies));
  }
  return;
}
