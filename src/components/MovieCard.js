const MovieCard = (movieData) => {
  const movieObj = movieData.movieData;
  // console.log(movieObj.poster_path);
  return (
    <div className="flex m-2 w-44 h-60">
      <img
        className="w-60 h-60"
        alt={movieData.title}
        src={"https://image.tmdb.org/t/p/w500" + movieObj.poster_path}
      />
    </div>
  );
};

export default MovieCard;
