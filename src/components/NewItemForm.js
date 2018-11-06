import React, { Component } from 'react'
import Input from './Input'
import axios from 'axios'
import '../styles/NewItemForm.css'

class NewItemForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: 'restaurant',
      private: false
    }

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
      .post('http://localhost:3001/items', {
        name: this.state.name,
        location: this.state.location,
        link: this.state.link,
        type: this.state.type,
        private: this.state.private,
        addedBy: 'Jeff'
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
      <div className="login-signup">
        <form onSubmit={this.handleSubmit}>
          <Input
            name={'name'}
            label={'Name'}
            handleChange={this.handleChange}
            type={'text'}
          />
          <Input
            name={'location'}
            label={'Address'}
            handleChange={this.handleChange}
            type={'text'}
          />
          <Input
            name={'link'}
            label={'URL'}
            handleChange={this.handleChange}
            type={'text'}
          />
          <div className="form-group">
            <label name="type">Type:</label>
            <select type="select" onChange={this.handleChange}>
              <option value="restaurant">Restaurant</option>
              <option value="park">Park</option>
              <option value="show">Show</option>
              <option value="activity">Activity</option>
            </select>
          </div>
          <div className="form-group">
            <label name="private">Public?:</label>
            <select type="select" onChange={this.handleChange}>
              <option value="false">Public</option>
              <option value="true">Private</option>
            </select>
          </div>
          <input type="submit" value="Create +" className="button" />
        </form>
      </div>
    )
  }
}

export default NewItemForm

// needs: Name, location, addedBy(current user), link, type, private?
