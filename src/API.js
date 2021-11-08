import axios from "axios";
import { SEARCH_BASE_URL, POPULAR_BASE_URL, API_URL } from "./config";

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
};

export default apiSetting;
