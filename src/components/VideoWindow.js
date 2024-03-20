import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { VIDEO_URL } from "../utils/constants";

const VideoWindow = (movieData) => {
  const selectedMovie = movieData?.movieData[0];
  const trailerId = selectedMovie?.id;
  useMovieTrailer(trailerId);
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={VIDEO_URL + trailerVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoWindow;
