import React from 'react'

const Form = (props) => {
  let newstuff = props.products.map((item, idx) => {
    return(
    <option key={idx}>
    {item.name} ${item.priceInCents/100}
    </option>
    )
  })
  
    return (
      <div className="container">
      <form>
        <div className="my-2">Total Price: ${props.total} </div>
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
            <option value="">--Please choose your item--</option>
            {newstuff}
          </select>
        </div>
        <button 
        className="btn btn-primary mb-3"
        onClick={props.addToCart}
        >
        Submit</button>
      </form>
      </div>
    )
  }


export default Form