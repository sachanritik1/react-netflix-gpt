import React from "react";

import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) {
    return null;
  }
  return (
    <div className="px-5 py-2 ">
      <p className="font-medium text-3xl py-4">{title}</p>
      <div className="flex overflow-x-auto">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
