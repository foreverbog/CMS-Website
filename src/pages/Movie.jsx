import { useParams } from "react-router-dom";
import cinemaImage from "../assets/cinema.png";

const Movie = ({ movies }) => {
  const { movieTitle } = useParams();

  // Find the specific movie using the movieTitle
  const movie = movies.find((movie) => movie.fields.title === movieTitle);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${cinemaImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" flex-1 grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-20">
        <img
          className="ml-16"
          src={movie.fields.imageOfMovie[0].fields.file.url}
          alt=""
          width="600"
        />
        <div className="flex flex-col gap-10">
          <h1 className="font-semibold text-white">
            Title: {movie.fields.title}
          </h1>
          <h2 className="font-semibold text-white">
            {" "}
            Principal Actor: {""}
            {movie.fields.actors[0].fields.lastName}{" "}
            {movie.fields.actors[0].fields.name}
          </h2>
          <p className="font-semibold text-white">Year: {movie.fields.year}</p>
          <p className="font-semibold text-white">
            Duration: {movie.fields.duration}
          </p>
          <p className="font-semibold text-white">
            Category: {movie.fields.category}
          </p>
          <p className="font-semibold text-white">
            Summary:
            <br />
            <br />
            {movie.fields.descript}
          </p>
          <div className="flex gap-8">
            <button className="rounded bg-transparent hover:bg-blue-500 w-52 h-10 text-white">
              READY TO WATCH!
            </button>
            <button className="rounded bg-transparent hover:bg-blue-500 w-52 h-10 text-white">
              ADD TO PLAYLIST
            </button>
            <button className="rounded bg-transparent hover:bg-blue-500 w-52 h-10 text-white">
              MARK AS NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
