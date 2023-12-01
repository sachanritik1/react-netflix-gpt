import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import MovieListShimmer from "../shimmers/MovieListShimmer";

const GptMovieSuggestion = () => {
  const movieNames = useSelector(
    (appStore) => appStore.gpt.suggestedMovieNames
  );
  const movieList = useSelector((appStore) => appStore.gpt.suggestedMovies);

  if (movieList?.length === 0) {
    return (
      <div className="flex flex-col text-white">
        <MovieListShimmer />
        <MovieListShimmer />
      </div>
    );
  }

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
