import React from 'react'
import Cards from "../components/Cards"

class PopularBattle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            currentBattle: 1
        }
    }

    componentDidMount() {
        fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6494f77fad9f3ca9eb2dbedc0e96f412")
            .then(response => response.json())
            .then(popular => {
                console.log("popular", popular)
                this.setState({
                    movies: popular.results
                })
            }).catch(error => console.error(error))
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    {this.state.movies.map(film => {
                        return (
                            <button>
                                <Cards
                                    img={`https://image.tmdb.org/t/p/w300/${film.backdrop_path}`}
                                    title={film.title}
                                    desc={film.overview}
                                    date={film.release_date}
                                />
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default PopularBattle;