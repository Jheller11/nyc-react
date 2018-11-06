import React, { Component } from 'react'
import Input from './Input'
import axios from 'axios'
import '../styles/NewItemForm.css'

class NewItemForm extends Component {
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
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div>
        <form>
          <Input
            name={'email'}
            label={'Email'}
            handleChange={this.handleChange}
            type={'text'}
          />
          <Input
            name={'email'}
            label={'Email'}
            handleChange={this.handleChange}
            type={'text'}
          />
          <Input
            name={'email'}
            label={'Email'}
            handleChange={this.handleChange}
            type={'text'}
          />
        </form>
      </div>
    )
  }
}

export default NewItemForm
