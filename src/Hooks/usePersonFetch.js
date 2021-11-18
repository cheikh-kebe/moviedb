import { useState, useEffect } from "react";
import API from "../API";

export const usePersonFetch = (personId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchActor = async () => {
      try {
        setError(false);
        setLoading(true);

        const person = await API.fetchActor(personId);
        const movieCredits = await API.fetchMovieCredits(personId);
        console.log(movieCredits.data);
        setState(() => ({
          ...person.data,
          ...movieCredits.data,
            cast: movieCredits.data.cast.sort((a, b) => b.popularity - a.popularity),
        }));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchActor();
  }, [personId]);

  return { state, error, loading };
};
