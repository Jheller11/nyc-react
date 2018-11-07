import React, { Component } from 'react'
import Input from './Input'
import axios from 'axios'
import '../styles/Login&Signup.css'

class Login extends Component {
  constructor(props) {
    super(props)
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
      .post('http://localhost:3001/users/login', {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.props.setUser(res.data)
          this.props.history.push('/all')
        } else if (res.status === 201) {
          this.props.setError(res.data.message)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="login-signup">
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
          <input type="submit" value="Log in" className="button" />
        </form>
      </div>
    )
  }
}

export default Login
