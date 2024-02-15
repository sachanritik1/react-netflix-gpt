import React from "react";
import { TMDB_IMG_CDN } from "../utils/constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  if (!movie.poster_path) {
    return null;
  }
  const handleClick = () => {
    navigate(`/watch/${movie.id}`);
  };

  return (
    <img
      className="w-48 rounded-lg px-2 hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
      src={TMDB_IMG_CDN + movie.poster_path}
      alt={movie.title}
      onClick={handleClick}
    />
  );
};

export default MovieCard;
