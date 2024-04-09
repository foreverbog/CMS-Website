import { useParams } from "react-router-dom";

const Movie = ({ movies }) => {
  const { movieTitle } = useParams();

  // Find the specific movie using the movieTitle
  const movie = movies.find((movie) => movie.fields.title === movieTitle);

  if (!movie) {
    return <div>Movie not found!</div>;
  }

  return (
    <div className=" flex-1 grid grid-cols-2  gap-8">
      <img
        src={movie.fields.imageOfMovie[0].fields.file.url}
        alt=""
        width="300"
      />
      <div className="flex flex-col gap-10">
        <h1>{movie.fields.title}</h1>
        <h2>
          {movie.fields.actors[0].fields.lastName}{" "}
          {movie.fields.actors[0].fields.name}
        </h2>
        <p>{movie.fields.year}</p>
        <p>{movie.fields.duration}</p>
        <p>{movie.fields.category}</p>
      </div>
    </div>
  );
};

export default Movie;
