import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import backup from "../assets/backup.jpg";
import loadingLogo from "../assets/loading.svg";
import { FaPlayCircle } from "react-icons/fa";
import { formatMinutesToHoursAndMinutes } from "../utils/formatTime";
import { formatNumber } from "../utils/formatNumber";

export const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const [trailerLink, setTrailerLink] = useState("");

  const videoRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (videoRef.current !== e.target) setTrailerLink("");
    });
  });

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_API_KEY
        }`,
      );
      const result = await response.json();
      setMovie(result);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  async function playTrailer() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`,
    );
    const data = await res.json();
    const trailerObject = data.results?.find((item) => item.type === "Trailer");
    let link = trailerObject
      ? `https://www.youtube.com/embed/${trailerObject.key}`
      : "Trailer not found";
    link = link.replace("watch?v=", "v/");
    console.log(link);
    setTrailerLink(link);
  }

  useEffect(() => {
    document.title = movie.title;
  });

  const image_path = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : backup;
  return (
    <section className="flex justify-around flex-wrap py-5">
      {loading ? (
        <section className="flex justify-center items-center h-[70vh]">
          <img src={loadingLogo} alt="" />
        </section>
      ) : (
        <>
          <div className="max-w-sm">
            <img src={image_path} className="rounded" alt={movie.title} />
          </div>
          <div
            className="max-w-2xl
							text-gray-700
							text-lg
							dark:text-white
							"
          >
            {trailerLink && (
              <>
                <div className="h-screen w-screen absolute top-0 left-0 bg-[#00000090]" />
                <div
                  ref={videoRef}
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-md overflow-hidden"
                >
                  <iframe src={trailerLink} width="1280" height="720" />
                </div>
              </>
            )}
            <div className="flex gap-10 items-center">
              <h1
                className="
								text-4xl
								font-bold
								my-3
								text-center
								lg:text-left
								"
              >
                {movie.title}
              </h1>
              <button
                onClick={playTrailer}
                className="flex items-center gap-3 hover:ring-2 py-2 px-4 rounded-md active:shadow-md"
              >
                <span className="text-xl">
                  <FaPlayCircle />
                </span>
                Play Trailer
              </button>
            </div>
            <p className="my-3">{movie.overview}</p>
            {movie.genres ? (
              <p className="my-7 flex flex-wrap gap-2">
                {movie.genres.map((genre) => (
                  <span
                    key={Math.random()}
                    className="border border-gray-200 rounded dark:border-gray-600 p-2 mr-2"
                  >
                    {genre.name}
                  </span>
                ))}
              </p>
            ) : (
              ""
            )}

            <div className="flex items-center">
              <svg
                className="w-4 h-4 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ml-2   text-gray-900 dark:text-white">
                {movie.vote_average}
              </p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span href="#" className=" text-gray-900  dark:text-white">
                {movie.vote_count} reviews
              </span>
            </div>

            <p className="my-4">
              <span className="mr-2 font-bold">RunTime:</span>
              <span>{formatMinutesToHoursAndMinutes(movie.runtime)}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Budget:</span>
              <span>{formatNumber(movie.budget)}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Revenue:</span>
              <span>{formatNumber(movie.revenue)}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">Release Date:</span>
              <span>{movie.release_date}</span>
            </p>
            <p className="my-4">
              <span className="mr-2 font-bold">IMDB Code:</span>
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noreferrer"
              >
                {movie.imdb_id}
              </a>
            </p>
          </div>
        </>
      )}
    </section>
  );
};
