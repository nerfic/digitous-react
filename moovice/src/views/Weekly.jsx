import React from 'react'
import Cards from "../components/Cards"
import moment from 'moment';

class Weekly extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: []
        }
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
                    <h2>Weekly</h2>
                    <div className="row mt-5">
                        {this.state.movies.map((film, index) => {
                            return (<Cards key={index}
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

export default Weekly;