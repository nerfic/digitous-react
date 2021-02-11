import React from 'react'
import Cards from "../components/Cards"

class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            page: 1
        }
    }

    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    prevPage = () => {
        this.setState({
            page: this.state.page - 1
        })
    }

    componentDidMount() {
        this.getMovie(this.state.page)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.getMovie(this.state.page)
        }
    }

    getMovie = (page) => {
        fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=${page}&api_key=6494f77fad9f3ca9eb2dbedc0e96f412`)
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
                    <h2>Popular</h2>
                    <div className="row mt-5">
                        {this.state.movies.map((film, index) => {
                            return (<Cards key={index}
                                img={`https://image.tmdb.org/t/p/w300/${film.backdrop_path}`}
                                title={film.title}
                                desc={film.overview}
                                date={film.release_date}
                            />)
                        })}
                        {this.state.page === 1 &&
                            <button className="btn btn-success" onClick={this.nextPage}>Page suivante</button>
                        }
                        {this.state.page > 1 && 
                            <>
                            <button className="btn btn-danger" onClick={this.prevPage}>Page Precedente</button>
                            <button className="btn btn-success" onClick={this.nextPage}>Page suivante</button>
                            </>
                        }
                    </div>
                </div>
            </div >
        )
    }
}

export default Popular;