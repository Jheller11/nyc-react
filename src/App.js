import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import List from './components/List'
import NoMatch from './components/NoMatch'
import Login from './components/Login'
import Signup from './components/Signup'
import Home from './components/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import NewItemForm from './components/NewItemForm'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [],
      error: '',
      isLoggedIn: false
    }

    this.setError = this.setError.bind(this)
    this.setItems = this.setItems.bind(this)
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

  // set login or signup error
  setError(err) {
    this.setState({
      error: err
    })
  }

  setItems(items) {
    this.setState({
      items: items
    })
  }

  render() {
    return (
      <div className="App">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <main>
          <Switch>
            <Route
              path="/users/login"
              render={props => (
                <Login
                  {...props}
                  message={this.state.error}
                  setError={this.setError}
                />
              )}
            />
            <Route
              path="/users/signup"
              render={props => (
                <Signup
                  {...props}
                  message={this.state.error}
                  setError={this.setError}
                />
              )}
            />
            <Route
              path="/all"
              render={props => <List {...props} items={this.state.items} />}
            />
            <Route
              path="/new"
              render={props => (
                <NewItemForm
                  {...props}
                  setError={this.setError}
                  setItems={this.setItems}
                />
              )}
            />
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="*" component={NoMatch} />
          </Switch>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
