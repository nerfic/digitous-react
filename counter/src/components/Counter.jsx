import React from "react";
import "./Counter.css";

class Counter extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <h2>{this.props.count}</h2>
                    <button className="btn btn-danger" onClick={this.props.decrementCount}>-</button>
                    <button className="btn btn-success" onClick={this.props.incrementCount}>+</button>
                </div>
            </div>
        );
    }
}

export default Counter;