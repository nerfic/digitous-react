import React from 'react'
import Cards from "../components/Cards"

class PopularBattle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            currentBattle: 0,
            favorites_id: []
        }
    }

    onClickBattle = (event, id) => {
        let favorites = []
        favorites.push(`${id}`)
        this.setState({
            currentBattle: this.state.currentBattle + 2,
            favorites_id: favorites
        })
        console.log(this.state.favorites_id)
        let ancien = JSON.parse(localStorage.getItem("favorites_id"))
        ancien.push(id)
        localStorage.setItem("favorites_id", JSON.stringify(ancien))
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
                    {this.state.movies.length >= 1 &&
                        <>
                            <button onClick={(event) => this.onClickBattle(event, this.state.movies[this.state.currentBattle].id)}>
                                <Cards
                                    img={`https://image.tmdb.org/t/p/w300/${this.state.movies[this.state.currentBattle].backdrop_path}`}
                                    title={this.state.movies[this.state.currentBattle].title}
                                    desc={this.state.movies[this.state.currentBattle].overview}
                                    date={this.state.movies[this.state.currentBattle].release_date}
                                />
                            </button>
                            <button onClick={(event) => this.onClickBattle(event, this.state.movies[this.state.currentBattle].id)}>
                                <Cards
                                    img={`https://image.tmdb.org/t/p/w300/${this.state.movies[this.state.currentBattle + 1].backdrop_path}`}
                                    title={this.state.movies[this.state.currentBattle + 1].title}
                                    desc={this.state.movies[this.state.currentBattle + 1].overview}
                                    date={this.state.movies[this.state.currentBattle + 1].release_date}
                                />
                            </button>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default PopularBattle;