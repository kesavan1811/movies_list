export const loadMovieStart = query => ({
  type: "LOAD_MOVIE_START",
  payload: query
});
export const loadMovieSuccess = movies => ({
  type: "LOAD_MOVIE_SUCCESS",
  payload: movies
});
export const loadMovieFail = error => ({
  type: "LOAD_MOVIE_FAIL",
  payload: error
});
