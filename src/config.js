const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
//Base movie url 
const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&language=fr-FR&query=`;
const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&language=fr-FR`;
//Base Series url
const SEARCH_SERIES_URL = `${API_URL}search/tv?api_key=${API_KEY}&language=fr-FR&query=`;
const POPULAR_SERIES_URL = `${API_URL}tv/popular?api_key=${API_KEY}&language=fr-FR`;
//authenticate and login url
const REQUEST_TOKEN_URL = `${API_URL}authentication/token/new?api_key=${API_KEY}`;
const LOGIN_URL = `${API_URL}authentication/token/validate_with_login?api_key=${API_KEY}`;
const SESSION_ID_URL = `${API_URL}authentication/session/new?api_key=${API_KEY}`;

//base image url
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/';
//HEROBANNER SIZE
const HEROBANNER_SIZE ='w1280'
//Poster Size
const POSTER_SIZE = 'w780';

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  HEROBANNER_SIZE,
  POSTER_SIZE,
  SEARCH_SERIES_URL,
  POPULAR_SERIES_URL,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
}