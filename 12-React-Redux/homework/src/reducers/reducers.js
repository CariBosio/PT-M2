import {
  GET_MOVIES,
  GET_MOVIES_DETAIL,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIES_FAVORITE,
} from "../actions-types/actions-types";

const initialState = {
  moviesLoaded: [],
  movieDetail: {},
  moviesFavorites: [],
};

export default function rootReducer(state = initialState, action) {
  //puede ser con un switch (Martina: CR React Redux 29:20)

  if (action.type === GET_MOVIES) {
    return {
      ...state,
      moviesLoaded: action.payload.Search,
    };
  }

  if (action.type === GET_MOVIES_DETAIL) {
    return {
      ...state,
      movieDetail: action.payload,
    };
  }

  if (action.type === ADD_MOVIE_FAVORITE) {
    return {
      ...state,
      moviesFavorites: state.moviesFavorites.concat(action.payload), //concatenar las peliculas que voy dando como favoritas
    };
  }

  if (action.type === REMOVE_MOVIES_FAVORITE) {
    return {
      ...state,
      moviesFavorites: state.moviesFavorites.filter(
        (movie) => movie.id !== action.id
      ),
    };
  }

  return state;
}

// export default rootReducer;
