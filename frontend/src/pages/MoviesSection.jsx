import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

const MoviesSection = ({ movies }) => {
  console.log(movies);
  return (
    <div className="bg-slate-200">
      <h1 className="text-5xl  text-center p-8 mb-4">Popular:</h1>
      <div className="flex flex-wrap justify-center items-center gap-16 ">
        {movies.map((movie) => (
          <Link to={`/${movie.id}`} key={movie.id}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
