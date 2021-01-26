import React from 'react';

class Box extends React.Component {
    render() {
        return (
            <div className="box col-sm-3 col-6">
                <span style={{ fontSize: 100, color: this.props.color }} className="material-icons">
                    {this.props.icon}
                </span>
                <p>{this.props.value} {this.props.unit}</p>
                {this.props.type !== "water" && <input type="range" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.props.onChange}></input>}
            </div>
        )
    }
}

export default Box;