import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_VIDEO_URL } from "../utils/constants";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (state) => state.movies?.nowPlayingMovies
  );

  if (nowPlayingMovies === null) {
    return;
  }

  const randomMovie = () => {
    return nowPlayingMovies[
      Math.floor(Math.random() * nowPlayingMovies.length)
    ];
  };

  const mainMovie = randomMovie();

  return (
    <div>
      <VideoTitle title={mainMovie.title} overview={mainMovie.overview} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
