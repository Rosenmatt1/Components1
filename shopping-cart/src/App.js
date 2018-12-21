import React, { Component } from 'react';
import './App.css';
import CartHeader from './CartHeader.js'
import CartFooter from './CartFooter.js'
import CartItems from './CartItems.js'
import Form from './Form.js'

class App extends Component {
  constructor(){
    super()

    this.state = {
      products: [
      { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
      { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
      { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
      { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
      { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
      { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
      { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
      { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
      { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ], 
    name: "",
    priceInCents: 0,
    cart: [],
    quantity: 0,
    total: 0
  }
}

updateQuantity = (event) => {
  this.setState({
    quantity: event.target.value
  })
}

updateOrder = (event) => {
  for (let i = 0; i < event.target.value.length; i++) {
    if (event.target.value[i] === "$") {
      var slicedName = event.target.value.slice(0, i -1)
    }
  }
  let price = this.state.products.filter(element => {
    return slicedName === element.name
  })
  this.setState({
    name: slicedName,
    priceInCents: (price[0].priceInCents/100)
  })
}

addToCart = (event) => {
  event.preventDefault()
  let newItem = {
    item: this.state.name,
    price: this.state.priceInCents,
    quantity: this.state.quantity
  }
  this.setState({
    cart: [...this.state.cart, newItem],
    total: this.state.quantity * this.state.priceInCents
  })
}

render() {

    return (
      <div>
        <CartHeader/>
        <CartItems
        cart = {this.state.cart} 
        />
        <Form
        addToCart={this.addToCart}
        total={this.state.total}
        products = {this.state.products}
        updateQuantity = {this.updateQuantity}
        updateOrder = {this.updateOrder} 
        />
        <CartFooter
        copyright = "&copy; 2016" 
        />
      </div>
    );
  }
}

export default App;
