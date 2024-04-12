import { useParams } from "react-router-dom";
import cinemaImage from "/images/cinema.png";

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
      <div className=" flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20 mb-20 mx-16">
        <img
          className=""
          src={movie.fields.imageOfMovie[0].fields.file.url}
          alt=""
          width="600"
        />
        <div className="flex flex-col gap-10 bg-black/40 p-4">
          <h1 className="font-semibold text-white">
            <b>Title:</b> {movie.fields.title}
          </h1>
          <h2 className="font-semibold text-white">
            {" "}
            <b>Principal Actor:</b> {""}
            {movie.fields.actors[0].fields.lastName}{" "}
            {movie.fields.actors[0].fields.name}
          </h2>
          <p className="font-semibold text-white">
            <b>Year:</b> {movie.fields.year}
          </p>
          <p className="font-semibold text-white">
            <b>Duration:</b> {movie.fields.duration}
          </p>
          <p className="font-semibold text-white">
            <b>Category:</b> {movie.fields.category}
          </p>
          <p className="font-semibold text-white text-balance leading-8">
            <b>Summary:</b>
            <br />
            <br />
            {movie.fields.descript}
          </p>
          <div className="flex flex-col sm:flex-row gap-8">
            <button className="rounded border-2 border-white bg-transparent hover:bg-blue-500 sm:w-52 h-10 hover:border-0 text-white">
              READY TO WATCH!
            </button>
            <button className="rounded bg-transparent border-2 border-white hover:bg-blue-500 sm:w-52 h-10 hover:border-0 text-white">
              ADD TO PLAYLIST
            </button>
            <button className="rounded bg-transparent border-2 border-white hover:bg-blue-500 sm:w-52 h-10 hover:border-0 text-white">
              MARK AS NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
