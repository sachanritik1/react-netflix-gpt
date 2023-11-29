import React from "react";
import { TMDB_NOW_PLAYING_MOVIES_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useMovies from "../hooks/useMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {
  useMovies(TMDB_NOW_PLAYING_MOVIES_URL, addNowPlayingMovies);
  const showGpt = useSelector((appStore) => appStore.gpt.showGpt);
  return (
    <div>
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
