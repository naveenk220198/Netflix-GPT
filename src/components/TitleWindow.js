import React from "react";

const TitleWindow = (movieData) => {
  const selectedMovie = movieData?.movieData[0];
  const { original_title, overview } = selectedMovie;
  return (
    <div className="md:pt-[20%] pt-[35%] md:pl-20 pl-4 absolute bg-gradient-to-r from-gray-950 text-white w-screen aspect-video">
      <p className="md:text-3xl font-bold text-lg md:bg-transparent">{original_title}</p>
      <p className="md:text-xl md:w-1/2 w-full text:sm hidden md:block">{overview}</p>
      <div className="flex md:my-2 md:block md:bg-transparent mb-3">
        <button className="md:px-4 md:py-1 md:mr-2 px-2 mr-1 text-sm md:text-lg h-6 md:h-12 md: rounded-sm bg-white text-black hover:text-black hover:opacity-70">
          Play
        </button>
        <button className="md:px-4 md:py-1 px-2 rounded-sm md:rounded-md text-black md:text-lg text-sm h-6 md:h-12  bg-gray-400 hover:text-black hover:opacity-70">
          More Info
        </button>
      </div>
    </div>
  );
};

export default TitleWindow;
