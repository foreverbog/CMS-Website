import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

const MoviesSection = ({ movies }) => {
  console.log(movies);
  return (
    <div className="flex flex-wrap justify-center items-center gap-8">
      {movies.map((movie) => (
        <Link to={`/${movie.fields.title}`} key={crypto.randomUUID()}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
};

export default MoviesSection;
