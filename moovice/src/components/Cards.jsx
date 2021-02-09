import React from 'react'

class Cards extends React.Component {
    render() {
        return (
            <div>
                <div className="card" style={{ width: "18rem" }}>
                    <img className="card-img-top" src={this.props.img} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p>{this.props.desc}</p>
                        <p>{this.props.date}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;