/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import backup from '../assets/backup.jpg';
import loadingLogo from '../assets/loading.svg';
import { useEffect, useState } from 'react';

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

    image.addEventListener('load', handleImageLoad);
    return () => {
      image.removeEventListener('load', handleImageLoad);
    };
  }, [image_path]);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        {imageLoading ? (
          <section className="flex justify-center items-center h-[70vh]">
            <img src={loadingLogo} alt="" />
          </section>
        ) : (
          <img className="rounded-t-lg" src={image_path} alt="logo" />
        )}
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
      </div>
    </div>
  );
};
