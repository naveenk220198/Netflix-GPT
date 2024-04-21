import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
  if (!movies) return;
  return (
    movies && <div className="bg-black md:bg-black md:mt-[-50px] z-70 absolute w-screen">
       <div>
      <MovieList movieData={movies.nowPlayingMovies} title={"Now Playing"} /></div>
       <div>
      <MovieList movieData={movies.topRatedMovies} title={"Top Rated"} /></div>
       <div>
      <MovieList movieData={movies.upcomingMovies} title={"Upcoming"} /></div>
       <div>
      <MovieList movieData={movies.popularMovies} title={"Popular"} /></div>
    </div>
  );
};

export default SecondaryContainer;
