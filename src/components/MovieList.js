import MovieCard from "./MovieCard";

const MovieList = (movieData) => {
  debugger;
  console.log(movieData);
  const arrayData = movieData?.movieData;
  //   console.log(arrayData);
  return (
    <div className="flex overflow-x-auto">
      {arrayData &&
        arrayData.map((item) => {
          return <MovieCard key={item.id} movieData={item} />;
        })}
    </div>
  );
};

export default MovieList;
