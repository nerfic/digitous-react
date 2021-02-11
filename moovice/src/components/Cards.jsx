import React from 'react'

class Cards extends React.Component {
    render() {
        return (
            <div>
                <div className="card" style={{ width: "450px", height: "650px" }}>
                    <img className="card-img-top" src={this.props.img} />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p>Description:</p>
                        <p className="text-muted">{this.props.desc}</p>
                    </div>
                    <div className="card-footer">
                    <span className="float-left">Date sortie: {this.props.date}</span>
                    {this.props.displayButton === true && 
                        <button className="btn btn-success btn-sm float-right" onClick={this.props.voteButton}>Voter</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default Cards;