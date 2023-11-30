export const NETFLIX_LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://wallpapers.com/images/hd/netflix-profile-pictures-5yup5hd2i60x7ew3.jpg";

export const LOGIN_BACKGROUND =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY || "";

export const TMDB_API_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGUyM2QyZDkxNDFlZDU4NDZjNTliNTU1ZmRlZGFkNSIsInN1YiI6IjYwYmM2MTY5ZWI2NGYxMDA3Nzc4N2UxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BnrsBXME-E944uTslCqox-kf3uPNzj6PvIvicp9GjR4";

export const TMDB_NOW_PLAYING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing";

export const TMDB_VIDEO_URL = "https://api.themoviedb.org/3/movie/";

export const TMDB_IMG_CDN = "https://image.tmdb.org/t/p/w500/";

export const TMDB_POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular";

export const TMDB_TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated";

export const TMDB_UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming";

export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + TMDB_API_ACCESS_TOKEN,
  },
};

export const SUPPORTED_LANGUAGES = [
  { id: "en", name: "English" },
  { id: "hind", name: "हिंदी" },
];

export const OPEN_AI_API_KEY = process.env.REACT_APP_OPEN_AI_API_KEY || "";

export const TMDM_SEARCH_MOVIE_URL =
  "https://api.themoviedb.org/3/search/movie?query=";
