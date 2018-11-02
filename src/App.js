import React, { Component } from 'react'
import List from './components/List'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }
  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <List props={this.state.items} />
      </div>
    )
  }
}

export default App
