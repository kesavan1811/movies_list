import axios from "axios";

export const loadMovieApi = async query => {
  let response;

  if (query === "") {
    response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=95046147d512308ff3f8a3ad3ce157d2"
    );
  } else {
    response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=95046147d512308ff3f8a3ad3ce157d2&query=${query}`
    );
  }

  return response.data.results;
};

export const API_IMG = "https://image.tmdb.org/t/p/w500/";
