const MovieCard = ({ movie }) => {
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-[400px]"
        src={movie.fields.imageOfMovie[0].fields.file.url}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{movie.fields.title}</div>
        <p className="text-gray-700 text-base">
          Principal actor: {movie.fields.actors[0].fields.lastName}{" "}
          {movie.fields.actors[0].fields.name} <br />
          Year: {movie.fields.year}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {movie.fields.category}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
