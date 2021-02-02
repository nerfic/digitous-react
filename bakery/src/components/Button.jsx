import React from "react";
import Add from "./Add"

class Button extends React.Component {
    render() {
        return (
            <div>
                <button className={this.props.isSelected} onClick={this.props.onClick}>{this.props.children}</button>
            </div>
        )
    }
}

export default Button;