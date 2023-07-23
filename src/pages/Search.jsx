/* eslint-disable react/prop-types */
import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/Card';
import { useFetch } from '../hooks/useFetch';
import { useEffect } from 'react';
import loadingLogo from '../assets/loading.svg';

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get('q');
  const { data: movies, isLoading } = useFetch(apiPath, queryTerm);

  useEffect(() => {
    document.title = `Search - ${queryTerm}`;
  });

  return (
    <>
      {isLoading ? (
        <section className="flex justify-center items-center h-[70vh]">
          <img src={loadingLogo} alt="" />
        </section>
      ) : (
        <>
          <section className="py-7">
            <p className="text-3xl text-gray-700 dark:text-white">
              {movies.length === 0
                ? `No movies found for ${queryTerm}`
                : `Result for '${queryTerm}'`}
            </p>
          </section>
          <section className="max-w-7xl mx-auto py-7">
            <div className="flex justify-start flex-wrap ">
              {movies &&
                movies.map((movie) => {
                  return <Card key={movie.id} movie={movie} />;
                })}
            </div>
          </section>
        </>
      )}
    </>
  );
};
