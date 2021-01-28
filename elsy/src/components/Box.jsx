import React from 'react';

class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span style={{ fontSize: 100, color: this.props.color }} className="material-icons">
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                {this.props.type !== "water" && this.props.unit !== "steps" && <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange}></input>}
                {this.props.unit === "steps" && <div><button className="btn btn-danger" onClick={this.props.moins}>-</button> <button className="btn btn-success" onClick={this.props.plus}>+</button></div>}
            </div>
        )
    }
}

export default Box;