import React, {Component} from 'react'

class Form extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          Quantity
          <input 
          type="text"
          className="form-control"
          >
          </input>
        
          <label htmlFor="products mt-3"> Products
          </label>
          <select className="form-control">
    <option value="">--Please choose an option--</option>
    <option value="dog">Dog</option>
    <option value="cat">Cat</option>
    <option value="hamster">Hamster</option>
    <option value="parrot">Parrot</option>
    <option value="spider">Spider</option>
    <option value="goldfish">Goldfish</option>
</select>
        </div>
        <button 
        type="submit"
        className="btn btn-primary"
        // onClick={this.props.addTodo}
        >
        Submit</button>
      </form>
    )
  }
}

export default Form