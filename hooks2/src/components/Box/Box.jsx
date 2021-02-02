import React from 'react';
import "./Box.css"

function Box() {
    return (
        <div className="box col-sm-3 col-6">
            <span className="material-icons">
                {this.props.icon}
            </span>
        </div>
    )
}

export default Box;


