import React from "react";
import { TMDB_NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useMovies from "../hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useMovies(TMDB_NOW_PLAYING_MOVIES_URL, addNowPlayingMovies);
  return (
    <div>
      {/* 
    - Main container
     - video background
     - video title
    - Secondary container
      - Movie list * n
        -cards * n
    */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
