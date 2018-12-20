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
    product: {
      name: "",
      id: "",
      priceinCents: "",
      forCart: []
    }, 
    quantity: 0
  }
}

updateQuantity = (event) => {
  console.log(event.target.value)
  this.setState({
    quantity: event.target.value
  })
}

updateOrder = (event) => {
  console.log(event.target.value)
  this.setState({
    newItem: event.target.value
  })
}

addToCart = (event) => {
  event.preventDefault()
}

// get the values from inputs, put into JavaScript object(represents cartItem), pass that info into cartItem.  Once we build our JavaScript object we need to pass into the stagnant arrray.


render() {

    return (
      <div>
        <CartHeader/>
        <CartItems
        itemList = {forCart} 
        />
        <Form
        products = {this.state.products}
        updateQuantity = {this.updateQuantity}
        updateOrder = {this.updateOrder} 
        addToCart = {this.addToOrder}
        />
        <CartFooter
        copyright = "&copy; 2016" 
        />
      </div>
    );
  }
}

export default App;
