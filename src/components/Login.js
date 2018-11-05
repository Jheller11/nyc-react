import React, { Component } from 'react'
import Input from './Input'
import axios from 'axios'

class Login extends Component {
  constructor() {
    super()
    this.state = {}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    let target = e.target.name
    let value = e.target.value
    this.setState({
      [target]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/users/login', this.state)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            name={'email'}
            label={'Email'}
            handleChange={this.handleChange}
            type={'email'}
          />
          <Input
            name={'password'}
            label={'Password'}
            handleChange={this.handleChange}
            type={'password'}
          />
          <input type="submit" value="Sign up!" />
        </form>
      </div>
    )
  }
}

export default Login
