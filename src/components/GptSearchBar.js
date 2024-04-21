import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BG_LOGO, GET_MOVIES_URL, gptQueryValidation, OPTIONS } from '../utils/constants'
import { addGptMovieResults } from '../utils/gptSlice'
import lang from '../utils/LanguageConstants'
import openAi from '../utils/openai'

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const searchText = useRef(null)
  const selectedLanguage = useSelector((store) => store.config.lang)
  const fetchGptMovies = async (movie) => {
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', OPTIONS)
    const json = await data.json()
    return json.results
  }
  const handleOpenAiSearch = async() => {
      const gptQuery = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". Only give me the list of top five movies as comma seperated values like example result given ahead. Example result : Brother, Don, Sholay, Raaz, Avengers."
      const gptResults = await openAi.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      const gptMovies = (gptResults.choices?.[0]?.message?.content).split(", ")
      const promiseArray = gptMovies.map((movie) => fetchGptMovies(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(addGptMovieResults({movieNames: gptMovies, movieResults: tmdbResults}))
  }
  return (
    <div className='md:mt-[12%] mt-0 md:flex md:justify-center md:mx-auto md:w-1/2'>
        <span className='md:text-red-500 md:text-4xl md:mt-10 sm:text-2xl md:font-bold md:bg-black md:bg-opacity-60 hidden md:block absolute p-3 mx-auto'>{lang[selectedLanguage].gptRecomendations}</span>
        <form label="GPT Search" className='flex md:pt-[0%] pt-[20%] md:mt-40 md:w-full' onSubmit={(e) => e.preventDefault()}>
            <div className='bg-black grid grid-cols-12 w-screen md:w-full'>
            <input type="text" placeholder={lang[selectedLanguage].gptSearchPlaceholder} 
            ref={searchText} className='md:p-4 md:m-4 md:h-14 md:text-xl text-sm p-3 m-3 h-10 border-black border-2 col-span-8'></input>
            <button className='md:px-10 md:py-4 md:text-xl px-7 py-3 text-sm md:my-4 md:mr-4 my-3 mr-3 md:h-14 h-10 bg-red-600 col-span-4 text-white md:rounded-md rounded-sm' onClick={handleOpenAiSearch}>{lang[selectedLanguage].search}</button>
            </div>
        </form>
        {/* <span>{ searchText && gptQueryValidation}</span> */}
       
    </div>
  )
}

export default GptSearchBar