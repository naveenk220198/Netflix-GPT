import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import TitleWindow from "./TitleWindow";
import VideoWindow from "./VideoWindow";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const Browse = () => {
  // Fetching data & putting it in store using custom hook
  useNowPlayingMovies();
  // console.log(useSelector((store) => store.movies));
  const movieData = useSelector((store) => store?.movies?.nowPlayingMovie);
  if (!movieData) return;
  return (
    <div>
      {/* Main Container
            - Video Window
            - Title Window
          Secondary Container
            - Movies * n
            - Cards * n
       */}
      <Header />
      <TitleWindow movieData={movieData} />
      <VideoWindow movieData={movieData} />
    </div>
  );
};

export default Browse;
