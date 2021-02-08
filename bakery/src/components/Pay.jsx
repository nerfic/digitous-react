import React from 'react'
import Card from './Card'

class Pay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            basket: [],
            total: 0,
            totalTVA: 0,
            totalEcoTax: 0,
            totalTTC: 0
        }
    }

    handleSelect = (name, price) => {
        const items = {
            name: name,
            price: price
        }
        const newItems = this.state.basket;
        newItems.push(items)
        this.setState({
            basket: newItems
        })
        this.calculateTotal()
    }

    calculateTotal = () => {
        let basket = this.state.basket;
        let total = 0;
        let totalEcoTax = 0;
        let totalTVA = 0;
        let totalTTC = 0;
        for (let i = 0; i < basket.length; i++) {
            total += parseInt(basket[i].price);
            totalEcoTax += 0.03;
        }
        totalTVA = total * 0.20;
        totalTTC = total + totalEcoTax + totalTVA
        this.setState({
            total: total,
            totalEcoTax: totalEcoTax,
            totalTVA: totalTVA,
            totalTTC: totalTTC
        })
    }

    render() {
        return (
            <div>
                <p>Pay</p>
                <p>Total: {this.state.total}€</p>
                <p>Total Eco Tax: {this.state.totalEcoTax}€</p>
                <p>Total TVA: {this.state.totalTVA}€</p>
                <p>Total TTC: {this.state.totalTTC}€</p>
                {this.props.items.map((items, index) => {
                    return (
                        <Card key={index} itemName={items.name} price={items.price} onClick={this.handleSelect}></Card>
                    );
                })}
            </div>
        )
    }
}

export default Pay;
