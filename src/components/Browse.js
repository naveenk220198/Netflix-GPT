import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import TitleWindow from "./TitleWindow";
// import VideoWindow from "./VideoWindow";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
// import { MOVIES_API, OPTIONS } from "../utils/constants";
// import { useEffect } from "react";
// import { addNowPlayingMovies } from "../utils/movieSlice";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
const Browse = () => {
  debugger;
  // Fetching data & putting it in store using custom hook
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  // console.log(useSelector((store) => store.movies));
  // const movies = useSelector((store) => store?.movies);
  // console.log(movies);
  // console.log(json);

  // if (!movieData) return;
  return (
    <div>
      {/* <p>Hiiiiiiiiiii</p> */}
      {/* Main Container
            - Video Window
            - Title Window
          Secondary Container
            - Movies * n
            - Cards * n
       */}
      <Header />
      {/* Main Container */}
      <MainContainer />
      {/* <TitleWindow movieData={movieData} />
        <VideoWindow movieData={movieData} /> */}
      {/* Secondary Container */}
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
