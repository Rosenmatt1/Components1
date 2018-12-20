import React, { Component } from 'react'

class ListItem extends Component {
  // state = {
  // check: false,
  // strike: 'none'
  }

  render() {
  
    return (
      <li>{this.props.todo} {this.props.time}</li>
    )
  }
}

export default ListItem