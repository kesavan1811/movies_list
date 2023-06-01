const initialState = {
  loading: false,
  posts: [],
  error: null,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_MOVIE_START":
      return {
        ...state,
        loading: true,
      };
    case "LOAD_MOVIE_SUCCESS":
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case "LOAD_MOVIE_FAIL":
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
