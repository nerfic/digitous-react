import React, { Component } from 'react'

export default class Film extends Component {
    render() {
        return (
            <div>
                <p>ID du film {this.props.film}</p>
                <p>Titre du film: {this.props.filmTitle}</p>
                <p>Réalisateur: {this.props.realisator}</p>
                <p>Acteurs: {this.props.actor}</p>
                <img src={this.props.image}></img>
                <p>Description: {this.props.description}</p>
            </div>
        )
    }
}
