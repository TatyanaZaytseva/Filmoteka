import { get } from './http';

export const getMostPopularMovies = () => {
  return get('/trending/movie/day');
};
