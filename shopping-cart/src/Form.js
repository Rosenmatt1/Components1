import React, {Component} from 'react'

const Form = (props) => {
  let newstuff = props.products.map((item, idx) => {
    return(
    <option key={idx}>
    {item.name} ${item.priceInCents/100}
    </option>
    )
  })
  
    return (
      <form>
        <div className="my-2">Total Price:  </div>
        <div className="form-group">
          Quantity
          <input 
          type="number"
          className="form-control" 
          onChange={props.updateQuantity} 
          />
          <label htmlFor="products mt-3"> Products</label>
          <select 
          className="form-control"
          onChange={props.updateOrder}
          >
            <option value="">--Please choose an option--</option>
            {newstuff}
          </select>
        </div>
        <button 
        className="btn btn-primary mb-3"
        onClick={props.addToCart}
        >
        Submit</button>
      </form>
    )
  }


export default Form