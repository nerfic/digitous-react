import React from 'react'
import Cards from "../components/Cards"
import moment from 'moment';

class WeeklyBattle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            currentBattle: 0,
            favorites_id: [],
            displayButton: true
        }
    }

    onClickBattle = (event, id) => {
        let favorites = this.state.favorites_id
        favorites.push(id)
        this.setState({
            currentBattle: this.state.currentBattle + 2,
            favorites_id: favorites
        })
        console.log("value favorites", this.state.favorites_id)
        localStorage.setItem("favorites_id", JSON.stringify(this.state.favorites_id))

    }

    componentDidMount() {
        const LAST_WEEK = moment().add(-1, 'w').format('YYYY-MM-DD');
        const TODAY = moment().format('YYYY-MM-DD')
        fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=6494f77fad9f3ca9eb2dbedc0e96f412`)
            .then(response => response.json())
            .then(popular => {
                this.setState({
                    movies: popular.results
                })
            }).catch(error => console.error(error))
    }

    render() {
        return (
            <div>
                <div className="container mt-5">
                    {this.state.movies.length > 1 && this.state.currentBattle < this.state.movies.length &&
                        <>
                        <div  className="row ">
                            <div className="col-12 col-md-6">
                                <Cards
                                    img={`https://image.tmdb.org/t/p/w300/${this.state.movies[this.state.currentBattle].backdrop_path}`}
                                    title={this.state.movies[this.state.currentBattle].title}
                                    desc={this.state.movies[this.state.currentBattle].overview}
                                    date={this.state.movies[this.state.currentBattle].release_date}
                                    displayButton={this.state.displayButton}
                                    voteButton={(event) => this.onClickBattle(event, this.state.movies[this.state.currentBattle].id)}
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <Cards
                                    img={`https://image.tmdb.org/t/p/w300/${this.state.movies[this.state.currentBattle + 1].backdrop_path}`}
                                    title={this.state.movies[this.state.currentBattle + 1].title}
                                    desc={this.state.movies[this.state.currentBattle + 1].overview}
                                    date={this.state.movies[this.state.currentBattle + 1].release_date}
                                    voteButton={(event) => this.onClickBattle(event, this.state.movies[this.state.currentBattle + 1].id)}
                                    displayButton={this.state.displayButton}
                                />
                            </div>
                        </div>
                        </>
                    }
                    {
                        this.state.currentBattle === this.state.movies.length && 
                        <>
                            <p>Vous avez parcouru tous les films !</p>
                        </>
                    }
                </div>
            </div>
        )
    }
}

export default WeeklyBattle;