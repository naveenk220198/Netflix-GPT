import { useDispatch } from "react-redux";
import { MOVIES_API, OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getPlayingMovies = async () => {
    const data = await fetch(MOVIES_API, OPTIONS);
    const json = await data.json();
    // Dispatching an action
    dispatch(addNowPlayingMovies(json.results));
    return json;
  };
  useEffect(() => {
    getPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
