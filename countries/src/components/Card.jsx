import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div>
                <div className="card" style={{ maxWidth: "500px" }}>
                    <img alt="country flag" className="card-img-top" src={this.props.img} />
                    <div className="card-body text-dark text-left">
                        <h5>Pays: {this.props.pays}</h5>
                        <h6>Capital: {this.props.capital}</h6>
                        <h6>Region: {this.props.region}</h6>
                        <h6>Population: {this.props.population}</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;