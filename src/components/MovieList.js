import MovieCard from "./MovieCard";

const MovieList = ({movieData, title}) => {
  const arrayData = movieData
  return (
    <div className="bg-black bg-opacity-80 h-full px-5">
    <h1 className="font-semibold md:text-2xl text-lg text-white md:py-2 md:px-2 px-1 py-1">{title}</h1>
    <div className="flex overflow-x-auto">
      <div className="flex">
      {arrayData &&
        arrayData.map((item) => {
          return <MovieCard key={item.id} movieData={item} />;
        })}
        </div>
    </div>
    </div>
  );
};

export default MovieList;
