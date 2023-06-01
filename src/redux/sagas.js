import { takeLatest, put, call } from "redux-saga/effects";
import { loadMovieApi } from "./api";
import { loadMovieFail, loadMovieSuccess } from "./actions";

export function* onLoadMovieStartAsync({ payload: { query } }) {
  try {
    const response = yield call(loadMovieApi, query);
    yield put(loadMovieSuccess(response));
  } catch (error) {
    console.log(error, "error");
    yield put(loadMovieFail(error));
  }
}

export function* onLoadMovie() {
  yield takeLatest("LOAD_MOVIE_START", onLoadMovieStartAsync);
}
