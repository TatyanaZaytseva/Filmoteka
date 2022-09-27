const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'ae750ece0804f05464dc1609a148e97e';

export const get = url => {
  return fetch(`${API_URL}${url}?api_key=${API_KEY}`)
    .then(resp => {
      return resp.json();
    })
    .catch(err => {
      console.log(`Err: ${err}`);
    });
};
