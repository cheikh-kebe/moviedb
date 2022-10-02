import axios from "axios";
import {
  POPULAR_SERIES_URL,
  SEARCH_BASE_URL,
  SEARCH_SERIES_URL,
  POPULAR_BASE_URL,
  API_URL,
  API_KEY,
  REQUEST_TOKEN_URL,
  LOGIN_URL,
  SESSION_ID_URL,
} from "./config";

const API = axios.create({
  baseURL: API_URL,
});

const apiSetting = {
  //movies
  fetchMovies: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${POPULAR_BASE_URL}&page=${page}`;
    return API.get(endpoint);
  },
  fetchMovie: async (movieId) => {
    const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=fr-FR`;
    return API.get(endpoint);
  },
  fetchCredits: async (movieId) => {
    const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=fr-FR`;
    return API.get(creditsEndpoint);
  },
  fetchSimilarMovies: async (movieId) => {
    const similarEndpoint = `${API_URL}movie/${movieId}/similar?api_key=${API_KEY}&language=fr-FR`;
    return API.get(similarEndpoint);
  },
  fetchActor: async (personId) => {
    const personEndpoint = `${API_URL}person/${personId}?api_key=${API_KEY}&language=fr-FR`;
    return API.get(personEndpoint);
  },
  fetchMovieCredits: async (personId) => {
    const actorMoviesEndpoint = `${API_URL}person/${personId}/movie_credits?api_key=${API_KEY}&language=fr-FR`;
    return API.get(actorMoviesEndpoint);
  },
  //tv series
  fetchSeries: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_SERIES_URL}${searchTerm}&page=${page}`
      : `${POPULAR_SERIES_URL}&page=${page}`;
    return API.get(endpoint);
  },
  fetchSerie: async (serieId) => {
    const endpoint = `${API_URL}tv/${serieId}?api_key=${API_KEY}&language=fr-FR`;
    return API.get(endpoint);
  },
  //token and authenticate
  getRequestToken: async () => {
    const requestToken = await API.get(REQUEST_TOKEN_URL);
    return requestToken.data.request_token;
  },
  authenticate: async (username, password, requestToken) => {
    const bodyData = {
      username: username,
      password: password,
      request_token: requestToken,
    };
    const data = await API.post(LOGIN_URL, {
      ...bodyData,
    });
    
    if (data.data.success) {
      const sessionId = await API.post(SESSION_ID_URL, {
        request_token: requestToken,
      });
      //console.log(sessionId.data)
      return sessionId;
    }
  },
  rateMovie: async (sessionId, movieId, value) => {
    const endpoint = `${API_URL}movie/${movieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

    const rating = await API.post(endpoint, {
      value: value,
    });
    return rating;
  },
  // rateSerie: async (sessionId, serieId, value) => {
  //   const endpoint = `${API_URL}tv/${serieId}/rating?api_key=${API_KEY}&session_id=${sessionId}`;

  //   const rating = await API.post(endpoint, {
  //     body: value,
  //   });
  //   return rating;
  // },
};

export default apiSetting;
