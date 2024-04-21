import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS, TOP_RATED_MOVIES_API } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedMovies = useSelector((store)=> store.movies.topRatedMovies)
  const getPlayingMovies = async () => {
    const data = await fetch(TOP_RATED_MOVIES_API, OPTIONS);
    const json = await data.json();
    // Dispatching an action
    dispatch(addTopRatedMovies(json.results));
    return json;
  };
  useEffect(() => {
    if (topRatedMovies == null) { 
      getPlayingMovies();
    }
  }, []);
};

export default useTopRatedMovies;
