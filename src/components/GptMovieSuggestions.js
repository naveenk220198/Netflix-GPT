import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => store.gpt)
  const {movieResults, movieNames} = gpt
  if (!movieNames) return null; 
  // Or shimmer UI
  return (
    <div className='mt-10 md:mt-20 '> 
      <div className='md:p-16 pt-16'>
        {movieNames.map((movieName, index) => <MovieList key={movieName} movieData={movieResults[index]} title={movieName}/>)}
      </div>
    </div>
  )
}

export default GptMovieSuggestions