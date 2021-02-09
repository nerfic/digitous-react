import React from 'react'
import Cards from "../components/Cards"

class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
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
        console.log("movie = ", this.state.movies)
        return (
            <div>
                <div className="container mt-5">
                    <h2>Popular</h2>
                    <div className="row mt-5">
                        {this.state.movies.map(film => {
                            return (<Cards
                                img={`https://image.tmdb.org/t/p/w300/${film.backdrop_path}`}
                                title={film.title}
                                desc={film.overview}
                                date={film.release_date}
                            />)
                        })}
                    </div>
                </div>
            </div >
        )
    }
}

export default Popular;