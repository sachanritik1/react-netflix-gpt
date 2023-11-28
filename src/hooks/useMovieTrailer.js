import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_VIDEO_URL } from "../utils/constants";
import { useEffect } from "react";

const useMovieTrailer = (movieId, storeReducer) => {
  const dispatch = useDispatch();
  const getMovieVideo = async (movieId) => {
    const response = await fetch(
      TMDB_VIDEO_URL + movieId + "/videos",
      TMDB_API_OPTIONS
    );
    const data = await response.json();
    const filterData = data.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length > 0 ? filterData[0] : data.results[0];
    dispatch(storeReducer(trailer));
  };

  useEffect(() => {
    getMovieVideo(movieId);
  }, []);
};

export default useMovieTrailer;
