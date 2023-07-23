/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';

export const useFetch = (apiPath, queryTerm="") => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${import.meta.env.VITE_API_KEY}&query=${queryTerm}`;

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      const response = await fetch(url);
      const result = await response.json();
      setData(result.results);
      setIsLoading(false);

      // try {
      //   setIsLoading(true);

      //   const response = await fetch(url);
      //   const result = await response.json();

      //   setData(result.results);
      //   setIsLoading(false);

      // } catch (error) {
      //   setIsLoading(false);
      //   setError(error);
      // }
    };

    fetchMovies();
  }, [url]);

  return { data, error, isLoading };
};
