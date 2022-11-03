import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/actions";
import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    //si se renderiza en esta ruta siempre aparece, si no cuando haga refres queda en blanco
    const movieID = this.props.match.params.id;
    this.props.getMovieDetail(movieID); // se despacha la accion y se llena el estado de movieDetail
  }
  //!va a renderizar la info de una película en particular
  render() {
    return (
      <div className="movie-detail">
        <h1>{this.props.movie.Title}</h1>
        <h2>Año: {this.props.movie.Year}</h2>
        <h2>Clasificación: {this.props.movie.Rated}</h2>
        <h2>Publicada: {this.props.movie.Released}</h2>
        <h2>Duración: {this.props.movie.RunTime}</h2>
        <h2>Género: {this.props.movie.Genre}</h2>
        <h2>Director: {this.props.movie.Director}</h2>
        <h2>Actores: {this.props.movie.Actors}</h2>
        <h2>Argumento: {this.props.movie.Plot}</h2>
        <h2>País: {this.props.movie.Country}</h2>
        <h2>Premios: {this.props.movie.Awards}</h2>
        <img src={this.props.movie.Poster} alt="img" />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.movieDetail,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (movieID) => dispatch(getMovieDetail(movieID)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
