import React from 'react'
import Card from '../components/Cards'

class Favorites extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            favIDs: this.getStorage()
        }
    }

    getStorage = () => {
        return JSON.parse(localStorage.getItem("favorites_id") || "[]");
        
    }

    getMovie = (id) => {
        fetch(`http://api.themoviedb.org/3/movie/${id}?api_key=6494f77fad9f3ca9eb2dbedc0e96f412`)
        .then(response => response.json())
        .then(movies => {
            console.log("movies", movies)
            const newMovies = this.state.movies;
            newMovies.push(movies)
            this.setState({
                movies: newMovies
            })
        }).catch(error => console.error(error))
    }
    
    componentDidMount() {
        this.state.favIDs.map((movies) => {
            return (
                this.getMovie(movies)
            )
        })
    }
    
    render() {
        console.log(this.state.favIDs)
        return (
            <div>
                <p>Favorites</p>
                {this.state.movies.map((movies) => {
                    console.log('test', movies)
                    return (
                        <Card
                        img={`https://image.tmdb.org/t/p/w300/${movies.backdrop_path}`}
                        title={movies.title}
                        desc={movies.overview}
                        date={movies.release_date}
                        />
                    )
                })}
                {this.state.favIDs.length === 0 &&
                    <p>Aucun favoris :(</p>
                }
            </div>
        )
    }
}

export default Favorites;