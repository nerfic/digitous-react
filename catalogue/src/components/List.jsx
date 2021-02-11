import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class List extends Component {
    render() {
        return (
            <div>
                {this.props.film.map((film, index) => {
                    return (
                        <Link key={index} to={`/film/${film.id}/`}>
                            <img className="" alt="film" src={film.image} />
                        </Link>
                    );
                })}
            </div>
        )
    }
}