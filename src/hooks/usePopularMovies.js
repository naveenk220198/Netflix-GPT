import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS, POPULAR_MOVIES_API } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  //
  const dispatch = useDispatch();
  const popularMovies = useSelector((store)=> store.movies.popularMovies);
  const getPlayingMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, OPTIONS);
    const json = await data.json();
    // Dispatching an action
    dispatch(addPopularMovies(json.results));
    return json;
  };
  useEffect(() => {
    if (popularMovies == null) { 
      getPlayingMovies();
    }
  }, []);
};

export default usePopularMovies;
