import React from "react";
import { TMDB_IMG_CDN } from "../utils/constants";
import useMovieTrailer from "../hooks/useMovieTrailer";

const MovieCard = ({ movie }) => {
  return (
    <img
      className="w-48 rounded-lg px-2"
      src={TMDB_IMG_CDN + movie.poster_path}
      alt={movie.title}
    />
  );
};

export default MovieCard;
