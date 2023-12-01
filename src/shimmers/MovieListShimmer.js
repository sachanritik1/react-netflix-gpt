import React from "react";

import MovieCardShimmer from "./MovieCardShimmer";

const MovieListShimmer = () => {
  const movies = Array.from({ length: 7 });
  return (
    <div className="px-5 py-2">
      <p className="h-10 w-72 bg-gray-800 m-2 rounded-lg"></p>
      <div className="flex overflow-x-auto ">
        {movies.map((movie, index) => (
          <MovieCardShimmer key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieListShimmer;
