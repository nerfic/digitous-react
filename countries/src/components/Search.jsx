import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div>
                <input type="text" placeholder="Search country" className="form-control" onChange={this.props.onChange}></input>
                <button class="btn btn-primary" onClick={this.props.onClick}>Search</button>
            </div>
        )
    }
}
