import { useState, useEffect } from "react";
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeMovieFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore ] = useState(false)
  
  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      setState((prev) => ({
        ...movies.data,
        results:
          page > 1 ? [...prev.results, ...movies.data.results] : [...movies.data.results],
      }));
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchMovies(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if(!isLoadingMore) return
    fetchMovies(state.page + 1, searchTerm)
    setIsLoadingMore(false)
  }, [isLoadingMore, state.page, searchTerm])

  return { state, loading, searchTerm, setSearchTerm, error, setIsLoadingMore };
};
 