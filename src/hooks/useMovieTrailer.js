import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (trailerId) => {
  const dispatch = useDispatch();
  // console.log(trailerId);
  // 872585;
  const getTrailerVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + trailerId + "/videos",
      OPTIONS
    );
    // console.log(data);
    const json = await data.json();
    const videoObject = json.results.filter(
      (video) => video.type === "Trailer"
    );
    // console.log(videoObject);
    const trailerVideoObject = videoObject.length
      ? videoObject[0]
      : json.results[0];
    // console.log("Trailer responses");
    // console.log(trailerVideoObject);
    dispatch(addTrailerVideo(trailerVideoObject));
    // return trailerVideoObject;
    // console.log(trailerVideoId);
  };
  useEffect(() => {
    getTrailerVideo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
export default useMovieTrailer;
