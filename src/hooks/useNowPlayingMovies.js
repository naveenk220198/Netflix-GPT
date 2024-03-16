import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      OPTIONS
    );
    const json = await data.json().results;
    console.log(json);
    // Dispatching an action
    dispatch(addNowPlayingMovies(json));
  };
  useEffect(() => {
    getPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
