import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { useSelector } from "react-redux";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { BG_LOGO } from "../utils/constants";
const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div>
      {showGptSearch && <div className="fixed -z-10 h-screen w-screen ">
        <img
        className='object-cover h-screen md:w-screen'
          src={BG_LOGO}
          alt="background-wallpaper"
        />
      </div>}
      <Header />
      {showGptSearch ? <GptSearch/> : <> <MainContainer />
      <SecondaryContainer /></>}
      
    </div>
  );
};

export default Browse;
