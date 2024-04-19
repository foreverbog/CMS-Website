const MovieCard = ({ movie }) => {
  return (
    <div className=" max-w-sm rounded overflow-hidden shadow-lg  mb-20 hover:scale-105 duration-500">
      <img
        className="w-full h-[600px] object-cover "
        src={movie.imgSrc}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4 bg-white relative  ">
        <div className="font-bold text-xl mb-2">{movie.title}</div>
        <p className="text-gray-700 text-base">
          Principal Actor: {movie.actors.firstName} {movie.actors.lastName}{" "}
          <br />
          Year: {movie.year}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 bg-white">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {movie.category}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
