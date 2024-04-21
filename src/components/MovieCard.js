const MovieCard = (movieData) => {
  const movieObj = movieData.movieData;
  if (!movieData.movieData.poster_path) return null
  return (
    <div className="flex m-2 md:w-44 md:h-60 w-28 h-36 overflow-hidden relative">
      <img
        className="w-full h-full object-cover"
        alt={movieData.title}
        src={"https://image.tmdb.org/t/p/w500" + movieObj.poster_path}
      />
    </div>
  );
};

export default MovieCard;
