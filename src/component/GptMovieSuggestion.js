import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const movieNames = useSelector(
    (appStore) => appStore.gpt.suggestedMovieNames
  );
  const movieList = useSelector((appStore) => appStore.gpt.suggestedMovies);

  return (
    <div className="flex flex-col text-white">
      {movieList?.map((movies, index) => {
        return (
          <MovieList key={index} movies={movies} title={movieNames[index]} />
        );
      })}
    </div>
  );
};

export default GptMovieSuggestion;
