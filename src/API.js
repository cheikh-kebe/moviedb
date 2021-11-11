import axios from "axios";
import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL, API_KEY } from "./config";

const API = axios.create({
  baseURL: API_URL,
});

const apiSetting = {
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
    const credits = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=fr-FR`;
    return API.get(credits);
  }
};

export default apiSetting;
