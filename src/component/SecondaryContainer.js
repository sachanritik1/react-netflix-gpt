import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import useMovies from "../hooks/useMovies";
import {
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
} from "../utils/moviesSlice";
import {
  TMDB_POPULAR_MOVIES_URL,
  TMDB_TOP_RATED_MOVIES_URL,
  TMDB_UPCOMING_MOVIES_URL,
} from "../utils/constants";

const SecondaryContainer = () => {
  const movies = useSelector((appStore) => appStore.movies);
  useMovies(TMDB_POPULAR_MOVIES_URL, addPopularMovies);
  useMovies(TMDB_TOP_RATED_MOVIES_URL, addTopRatedMovies);
  useMovies(TMDB_UPCOMING_MOVIES_URL, addUpcomingMovies);

  return (
    <div className="bg-transparent text-white -mt-56 relative z-50">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
    </div>
  );
};

export default SecondaryContainer;
