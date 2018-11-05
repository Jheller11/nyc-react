import React, { Component } from 'react'
import Input from './Input'
import axios from 'axios'

class Signup extends Component {
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
      .post('http://localhost:3001/users/signup', {
        email: this.state.email,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname
      })
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
          <Input
            name={'firstname'}
            label={'First Name'}
            handleChange={this.handleChange}
            type={'text'}
          />
          <Input
            name={'lastname'}
            label={'Last Name'}
            handleChange={this.handleChange}
            type={'text'}
          />
          <input type="submit" value="Sign up!" />
        </form>
      </div>
    )
  }
}

export default Signup
