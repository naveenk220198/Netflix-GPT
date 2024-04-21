import { useDispatch, useSelector } from "react-redux";
import { MOVIES_API, OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store)=> store.movies.nowPlayingMovies)
  const getPlayingMovies = async () => {
    const data = await fetch(MOVIES_API, OPTIONS);
    const json = await data.json();
    const results = json.results;
    dispatch(addNowPlayingMovies(results));
    return results;
  };
  useEffect(() => {
    if (!nowPlayingMovies) {
      getPlayingMovies();
    }
    }, []);
};

export default useNowPlayingMovies;
