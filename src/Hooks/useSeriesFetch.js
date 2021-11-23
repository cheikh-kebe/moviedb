import { useState, useEffect } from "react";
import API from '../API';

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0  
}

export const useSeriesFetch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore ] = useState(false);

  const fetchSeries = async (page, searchTerm ="") => {
    try {
      setError(false);
      setLoading(true);
      const series = await API.fetchSeries(searchTerm, page);
      setState((prev) => ({
        ...series.data,
        results:
          page > 1 ? [...prev.results, ...series.data.results] : [...series.data.results],
      }));
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }
  useEffect(() => {
    fetchSeries(1, searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    if(!isLoadingMore) return
    fetchSeries(state.page + 1, searchTerm)
    setIsLoadingMore(false)
  }, [isLoadingMore, state.page, searchTerm])

  return { state, loading, searchTerm, setSearchTerm, error, setIsLoadingMore };
}
