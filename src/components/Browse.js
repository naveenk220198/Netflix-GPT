import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  // Fetching data & putting it in store using custom hook
  useNowPlayingMovies();
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
