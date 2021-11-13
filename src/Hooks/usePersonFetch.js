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

        setState(() => ({
          ...person.data,
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
