import { useState, useEffect } from "react";
import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async (page) => {
      try {
        setError(false);
        setLoading(true);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const similar = await API.fetchSimilarMovies(movieId);
        console.log(movie.data);
        console.log(credits.data);
        console.log(similar.data);
        setState((prev) => ({
          ...movie.data,
          cast: credits.data.cast,
          results:
            page > 1
              ? [...prev.results, similar.data.results]
              : [...similar.data.results],
        }));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchMovie();
  }, [movieId]);

  return { state, error, loading };
};
