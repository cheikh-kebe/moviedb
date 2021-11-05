const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
//Base url 
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US`;
//base iamge url
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
//HEROBANNER SIZE
const HEROBANNER_SIZE ='W1280'
//Poster Size
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  HEROBANNER_SIZE,
  POSTER_SIZE
}