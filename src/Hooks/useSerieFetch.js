import { useState, useEffect } from "react";
import API from "../API";

export const useSerieFetch = (serieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchSerie = async (page) => {
      try {
        setError(false);
        setLoading(true);

        const serie = await API.fetchSerie(serieId);
        //const credits = await API.fetchCredits(serieId);
        //const similar = await API.fetchSimilarMovies(serieId);
        console.log(serie.data);
        setState(() => ({
          ...serie.data,
          // cast: credits.data.cast,
          // results:
          //   page > 1
          //     ? [...prev.results, similar.data.results]
          //     : [...similar.data.results],
        }));
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };
    fetchSerie();
  }, [serieId]);

  return { state, error, loading };
};
