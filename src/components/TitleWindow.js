import React from "react";

const TitleWindow = (movieData) => {
  // console.log(movieData);
  // return <div>Hi</div>;
  // console.log(movieData);
  const selectedMovie = movieData?.movieData[0];
  // console.log(selectedMovie);
  const { original_title, overview } = selectedMovie;
  return (
    <div className="pt-[20%] pl-20 absolute bg-gradient-to-r from-gray-950 text-white w-screen aspect-video">
      <p className="text-3xl font-bold">{original_title}</p>
      <p className="text-xl w-1/4">{overview}</p>
      <div className="flex my-2">
        <button className="px-6 py-2 mr-2 rounded-sm bg-white text-black hover:text-black hover:opacity-70">
          Play
        </button>
        <button className="px-6 py-2 rounded-sm text-black bg-white hover:text-black hover:opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default TitleWindow;
