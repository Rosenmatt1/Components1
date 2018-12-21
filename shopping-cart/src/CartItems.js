import React, {Component} from 'react'
import CartItem from './CartItem.js'

class CartItems extends Component {

  render(props) {

    return(
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          
          {this.props.cart.map((item, idx) => { 
            console.log(item)
          return <CartItem 
            key={idx}
            product={item.item}
            price={item.price}
            quantity={item.quantity}
          />})} 

        </div>
      </div>
    )
  }
}

export default CartItems 



