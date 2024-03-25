/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import loadingLogo from "../assets/loading.svg";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies, error, isLoading } = useFetch(apiPath);

  useEffect(() => {
    document.title = title;
  });

  return (
    <div className="">
      {isLoading ? (
        <section className="flex justify-center items-center h-[70vh]">
          <img src={loadingLogo} alt="" />
        </section>
      ) : (
        <section className="max-w-7xl mx-auto py-7 ">
          <div className="flex justify-start px-3 flex-wrap other:justify-evenly">
            {movies &&
              movies.map((movie) => {
                return <Card key={movie.id} movie={movie} />;
              })}
          </div>
        </section>
      )}
    </div>
  );
};
