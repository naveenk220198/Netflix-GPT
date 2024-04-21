import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (trailerId) => {
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + trailerId + "/videos",
      OPTIONS
    );
    const json = await data.json();
    const videoObject = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailerVideoObject = videoObject.length
      ? videoObject[0]
      : json.results[0];
    dispatch(addTrailerVideo(trailerVideoObject));
  };
  useEffect(() => {
    getTrailerVideo();
  }, []);
};
export default useMovieTrailer;
