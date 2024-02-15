import React from "react";
import { useSelector } from "react-redux";
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
      <VideoTitle mainMovie={mainMovie} />
      <VideoBackground movieId={mainMovie.id} />
    </div>
  );
};

export default MainContainer;
