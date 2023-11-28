import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_OPTIONS } from "../utils/constants";

const useMovies = (url, storeReducer) => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(url, TMDB_API_OPTIONS);
    const json = await data.json();
    dispatch(storeReducer(json.results));
  };
  useEffect(() => {
    getMovies();
  }, []);
};

export default useMovies;
