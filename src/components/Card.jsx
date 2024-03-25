/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import backup from "../assets/backup.jpg";
import loadingLogo from "../assets/loading.svg";
import { useEffect, useState } from "react";

export const Card = ({ movie }) => {
  const { id, original_title, overview, poster_path } = movie;
  const image_path = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : backup;

  const [imageLoading, setImageLoading] = useState(true);

  // const handleLoading = () => {
  //   console.log('image loaded')
  // }
  useEffect(() => {
    const image = new Image();
    image.src = image_path;

    const handleImageLoad = () => {
      setImageLoading(false);
    };

    image.addEventListener("load", handleImageLoad);
    return () => {
      image.removeEventListener("load", handleImageLoad);
    };
  }, [image_path]);

  return (
    <Link to={`/movie/${id}`}>
      <div
        className="max-w-sm bg-white border border-gray-200 rounded-lg overflow-hidden shadow
			group
			dark:bg-gray-800 dark:border-gray-700 m-3 relative"
      >
        {imageLoading ? (
          <section className="flex   rounded-lg justify-center items-center h-[70vh]">
            <img src={loadingLogo} alt="" />
          </section>
        ) : (
          <img className="rounded-t-lg" src={image_path} alt="logo" />
        )}
        <div className="absolute bottom-[-100%] group-hover:bottom-0  duration-700 p-5 bg-black/70 text-white rounded-b-md">
          <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              {original_title}
            </h5>
          </Link>
          <p className="mb-3 font-normal text-white dark:text-gray-400">
            {overview}
          </p>
        </div>
      </div>
    </Link>
  );
};
