import {
  GET_MOVIES,
  GET_MOVIES_DETAIL,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIES_FAVORITE,
} from "../actions-types/actions-types";

export function getMovies(title) {
  return function (dispatch) {
    return fetch("http://www.omdbapi.com/?apikey=640d0cc7&s=" + title)
      .then((response) => response.json())
      .then((movies) => {
        //esa respuesta json es un objeto que se aloja en movie
        dispatch({ type: GET_MOVIES, payload: movies });
      });
    // .catch (error => { console.log(error) })
  };
}

export function getMovieDetail(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=640d0cc7&i=${id}`)
      .then((response) => response.json()) //convertirlo a json
      .then((detail) => dispatch({ type: GET_MOVIES_DETAIL, payload: detail }));
  };
}

export function addMovieFavorite(movie) {
  return { type: ADD_MOVIE_FAVORITE, payload: movie };
}

export function removeMovieFavorite(id) {
  return {
    type: REMOVE_MOVIES_FAVORITE,
    id, //esto sería el payload, se puede llamar de cualquier manera
  };
}
