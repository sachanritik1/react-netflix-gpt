import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../languageConstants";
import openai from "../utils/openai";
import { TMDB_API_OPTIONS, TMDM_SEARCH_MOVIE_URL } from "../utils/constants";
import { addSuggestedMovieNames, addSuggestedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langId = useSelector((appStore) => appStore.config.language);
  const searchText = useRef("");

  const searchMovies = async (query) => {
    const data = await fetch(TMDM_SEARCH_MOVIE_URL + query, TMDB_API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  async function handleGptSearch() {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });
    const suggestedMovies = gptResults.choices[0].message.content.split(", ");
    dispatch(addSuggestedMovieNames(suggestedMovies));

    const promiseArray = suggestedMovies.map((suggestedMovie) =>
      searchMovies(suggestedMovie)
    );

    const moviesArray = await Promise.all(promiseArray);
    dispatch(addSuggestedMovies(moviesArray));
  }

  return (
    <div className="mt-24 z-50 w-full flex justify-center">
      <form
        className="flex justify-center p-4 rounded-md w-2/3 bg-gray-800"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="p-2 w-72 rounded-md mx-2 w-3/4"
          placeholder={lang[langId].gptSearchPlaceholder}
          ref={searchText}
        />
        <button
          className="text-white bg-red-600 mx-2 p-2 rounded-md w-1/4"
          onClick={handleGptSearch}
        >
          {lang[langId].gptSearchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
