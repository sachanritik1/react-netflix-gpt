import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../languageConstants";
import openai from "../utils/openai";
import { TMDB_API_OPTIONS, TMDM_SEARCH_MOVIE_URL } from "../utils/constants";
import { addSuggestedMovieNames, addSuggestedMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const [showDefault, setShowDefault] = useState(true);
  useEffect(() => {
    handleGptSearch("Top rated Impdb movies");
  }, []);

  const dispatch = useDispatch();
  const langId = useSelector((appStore) => appStore.config.language);
  const searchText = useRef("");

  const searchMovies = async (query) => {
    const data = await fetch(TMDM_SEARCH_MOVIE_URL + query, TMDB_API_OPTIONS);
    const json = await data.json();
    return json.results;
  };

  async function handleGptSearch() {
    dispatch(addSuggestedMovieNames([]));
    dispatch(addSuggestedMovies([]));
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    let gptResults;
    try {
      gptResults = await openai.chat.completions.create({
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
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-24 z-50 w-full flex justify-center">
        <form
          className="flex justify-center p-4 rounded-md w-2/5 bg-gray-800"
          onSubmit={(e) => {
            e.preventDefault();
            setShowDefault(false);
          }}
        >
          <input
            className="p-2 rounded-md mx-2 w-3/4"
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

      <p className="text-white p-2 text-2xl font-bold italic">
        {showDefault ? "Our Recommendation for you" : "Search Results"} {":"}
      </p>
    </div>
  );
};

export default GptSearchBar;
