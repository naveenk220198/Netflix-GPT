import { useDispatch } from "react-redux";
import { MOVIES_API, OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  debugger;
  const dispatch = useDispatch();
  const getPlayingMovies = async () => {
    const data = await fetch(MOVIES_API, OPTIONS);
    const json = await data.json();
    const results = json.results;
    // Dispatching an action
    // console.log(results);
    dispatch(addNowPlayingMovies(results));
    return results;
  };
  useEffect(() => {
    getPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
