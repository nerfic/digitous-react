import React from 'react'

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: "/img/item.png",
        }
    }

    componentDidMount() {
        fetch(`https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/${this.props.itemName}.png`)
            .then(response => response.blob())
            .then(result => {
                let newResult = URL.createObjectURL(result)
                this.setState({
                    image: newResult,
                })
            })
            .catch(error => console.error(error))
    }

    render() {
        return (
            <div>
                <div className="card">
                    <button onClick={(e) => this.props.onClick(this.props.itemName, this.props.price)}>
                        <img alt="product" className="card-img-top" style={{ maxWidth: "300px" }} src={this.state.image} />
                        <p>{this.props.itemName}</p>
                        <p>{this.props.price}€</p>
                    </button>
                </div>
            </div>
        )
    }
}

export default Card;