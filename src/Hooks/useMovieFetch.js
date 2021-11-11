import { useState, useEffect } from "react";
import API from "../API";

export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setError(false);
        setLoading(true);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        console.log(movie.data)
        setState({
          ...movie.data,
          cast: credits.data.cast,
        });
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchMovie()
  }, [movieId]);

  return {state, error, loading};
};
