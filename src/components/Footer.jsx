import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-white  shadow p-4 dark:bg-gray-800">
      <div className="w-full mx-auto md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{' '}
          <Link href="/" className="hover:underline">
            CineSage
          </Link>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="https://www.instagram.com/s_lakha29/" target="_blank" rel='noreferrer' className="mr-4 hover:underline md:mr-6 ">
              Instagram
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/sahil-lakha-69540b23b/" target="_blank" rel='noreferrer' className="mr-4 hover:underline md:mr-6">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/zydiag" target="_blank" rel='noreferrer' className="mr-4 hover:underline md:mr-6">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/Zydiag" target="_blank" rel='noreferrer' className="hover:underline">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
