export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const BG_LOGO = "https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_small.jpg";

export const USERLOGO =
  "https://i.pinimg.com/originals/e3/94/30/e39430434d2b8207188f880ac66c6411.png";
export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};
export const MOVIES_API =
  "https://api.themoviedb.org/3/movie/now_playing?&page=1";
export const POPULAR_MOVIES_API =
  "https://api.themoviedb.org/3/movie/popular?&page=1";
export const TOP_RATED_MOVIES_API =
  "https://api.themoviedb.org/3/movie/top_rated?&page=1";
export const UPCOMING_MOVIES_API =
  "https://api.themoviedb.org/3/movie/upcoming?&page=1";
export const VIDEO_URL = "https://www.youtube.com/embed/";
export const LANG_CODES = [{identifier:"en", value:"English"}, {identifier:"hin", value:"Hindi"}, {identifier:"de", value:"German"}]

export const OPENAPI_KEY = process.env.REACT_APP_OPENAI_KEY