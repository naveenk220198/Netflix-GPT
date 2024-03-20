import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  console.log(movies);
  if (!movies) return;
  return (
    <div>
      <MovieList movieData={movies.nowPlayingMovies} title={"Now Playing"} />
      <MovieList movieData={movies.upcomingMovies} title={"Upcoming"} />
      <MovieList movieData={movies.topRatedMovies} title={"Top Rated"} />
      <MovieList movieData={movies.popularMovies} title={"Popular"} />
    </div>
  );
};

export default SecondaryContainer;
