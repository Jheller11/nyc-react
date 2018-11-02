import React, { Component } from 'react'
import List from './components/List'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: ['']
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/items')
      .then(res => {
        this.setState({
          items: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <h1>React</h1>
        <List items={this.state.items} />
      </div>
    )
  }
}

export default App
