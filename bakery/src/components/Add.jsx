import React from 'react'

class Add extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            productName: "",
            price: 1
        }
    }

    updateItemName = (e) => {
        this.setState({
            productName: e.target.value
        })
        console.log(this.state.productName)
    }

    updatePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    }

    render() {
        return (
            <div>
                <p>Add</p>
                <div className="input-group mb-3">
                    <input onChange={this.updateItemName} type="text" className="form-control" placeholder="Enter item" aria-label="Recipient's username" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-secondary" type="button" onClick={this.props.addItems}>Add</button>
                </div>
                <input min="1" max="10" type="range" onChange={this.updatePrice} value={this.state.price}></input>
                <p>{this.state.price}€</p>
            </div>
        )
    }
}

export default Add;