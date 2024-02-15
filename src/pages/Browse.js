import React from "react";
import { TMDB_NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useMovies from "../hooks/useMovies";
import MainContainer from "../component/MainContainer";
import SecondaryContainer from "../component/SecondaryContainer";

const Browse = () => {
  useMovies(TMDB_NOW_PLAYING_MOVIES_URL, addNowPlayingMovies);
  return (
    <>
      <MainContainer />
      <SecondaryContainer />
    </>
  );
};

export default Browse;
