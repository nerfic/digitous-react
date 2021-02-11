import React, { Component } from 'react'

export default class Film extends Component {
    render() {
        const movie = this.props.movies
            .find((movie) => {
                return movie.id === parseInt(this.props.match.params.id);
            });
        return (
            <div>
                <p>ID du film {movie.film}</p>
                <p>Titre du film: {movie.filmTitle}</p>
                <p>Réalisateur: {movie.realisator}</p>
                <p>Acteurs: {movie.actor}</p>
                <img src={movie.image}></img>
                <p>Description: {movie.description}</p>
            </div>
        )
    }
}
