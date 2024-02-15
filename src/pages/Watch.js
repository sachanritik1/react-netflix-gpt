import React from "react";
import { useParams } from "react-router-dom";
import useMovieTrailer from "../hooks/useMovieTrailer";

const Watch = () => {
  const { movieId } = useParams();
  const [trailer] = useMovieTrailer(movieId);
  console.log(movieId);
  return (
    <div className="h-screen">
      <iframe
        className="h-full w-full"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&modestbranding=1&showinfo=0&autohide=1&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

export default Watch;
