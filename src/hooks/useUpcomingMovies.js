import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { OPTIONS, UPCOMING_MOVIES_API } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store)=> store.movies.upcomingMovies)
  const getPlayingMovies = async () => {
    const data = await fetch(UPCOMING_MOVIES_API, OPTIONS);
    const json = await data.json();
    // Dispatching an action
    dispatch(addUpcomingMovies(json.results));
    return json;
  };
  useEffect(() => {
    if (upcomingMovies == null) {
      getPlayingMovies();
    }
  }, []);
};

export default useUpcomingMovies;
