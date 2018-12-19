import React, { Component } from 'react'
import './App.css'
// import ListItem from './components/listitem.js'
// import todos from './data.js'
import List from './components/list.js'
import AddListItem from './components/addlistitem.js'

class App extends Component {

  constructor() {
    super()
    this.state = {
      newTodo: "",
      todos: []
    }
  }

  updateTodo = (event) => {
    this.setState({
      newTodo: event.target.value
    })
  }

  addTodo = (event) => {
    event.preventDefault()

    if(this.state.newTodo.length === 0) {
      alert('No Todo')
    } else {
      let todo = {
        todo: this.state.newTodo
      }
      this.setState({
        todos: [...this.state.todos, todo]
      })
    }
  }
 
  render() {
    return (
      <div>
        <AddListItem 
        updateTodo={this.updateTodo}
        addTodo={this.addTodo}
        />

        <List 
        todos={this.state.todos}/>
      </div>
    )
  }
}

export default App
