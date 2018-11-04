import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import List from './components/List'
import NoMatch from './components/NoMatch'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: []
    }
  }
  // fetch all items.
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
        <Switch>
          <Route path="/users/login" component={NoMatch} />
          <Route path="/users/signup" component={NoMatch} />
          <Route
            exact
            path="/"
            render={props => <List {...props} items={this.state.items} />}
          />
          <Route path="*" component={NoMatch} />
        </Switch>
      </div>
    )
  }
}

export default App
