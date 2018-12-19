import React, { Component } from 'react'

class AddListItem extends Component {

  render() {
    return (
      <form>
        <div className="form-group">
          Enter Todo
          <input 
          type="text"
          className="form-control"
          onChange={this.props.updateTodo} 
          required>
          </input>
        </div>
        <button 
        type="submit"
        className="btn-dark"
        onClick={this.props.addTodo}>
        
        Add To Do</button>
      </form>
    )
  }
}

export default AddListItem