import React from "react";
import { useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((appStore) => appStore.movies?.trailerVideo);
  useMovieTrailer(movieId, addTrailerVideo);
  return (
    <div>
      <iframe
        className="w-full h-screen"
        src={
          "https://www.youtube.com/embed/" +
          trailer?.key +
          "?&autoplay=1&mute=1&modestbranding=1&autohide=1&showinfo=0&controls=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
