import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getPlayingMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, OPTIONS);
    const json = await data.json();
    // Dispatching an action
    dispatch(addTopRatedMovies(json.results));
    return json;
  };
  useEffect(() => {
    getPlayingMovies();
  }, []);
};

export default useTopRatedMovies;
