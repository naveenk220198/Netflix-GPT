import React from "react";
import TitleWindow from "./TitleWindow";
import VideoWindow from "./VideoWindow";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const { nowPlayingMovies } = useSelector((store) => store?.movies);
  if (!nowPlayingMovies) return;
  return (
    <div>
      <TitleWindow movieData={nowPlayingMovies} />
      <VideoWindow movieData={nowPlayingMovies} />
    </div>
  );
};

export default MainContainer;
