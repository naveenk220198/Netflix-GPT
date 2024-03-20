import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, POPULAR_MOVIES_API } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  //
  const dispatch = useDispatch();
  const getPlayingMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, OPTIONS);
    const json = await data.json();
    // Dispatching an action
    dispatch(addPopularMovies(json.results));
    return json;
  };
  useEffect(() => {
    getPlayingMovies();
  }, []);
};

export default usePopularMovies;
