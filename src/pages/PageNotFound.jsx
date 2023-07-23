import { Link } from 'react-router-dom';
import img from '../assets/pageNotFound.jpg';
// import { useEffect } from 'react';
export const PageNotFound = () => {

  // useEffect(() => {
  //   document.title = 'Page not found';
  // })
  
  return (
    <section className="flex flex-col justify-center px-2">
      <div className="flex flex-col items-center my-4  ">
        <p className="text-7xl font-bold text-gray-700 my-10 dark:text-white">
          404 Oops!
        </p>
        <div className="max-w-lg">
          <img src={img} className="rounded" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div className="flex justify-center my-4">
        <Link
          to="/"
          className="text-center w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
          rounded-lg
          px-5
          py-2.5
          font-medium
          text-white
          "
        >
          Back to home
        </Link>
      </div>
    </section>
  );
};
