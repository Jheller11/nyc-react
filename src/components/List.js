import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ListItem from './ListItem'
import ListController from './ListController'
import '../styles/List.css'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      view: 'all',
      type: 'all'
    }
  }

  render() {
    let list = () => {
      switch (this.state.view) {
        case 'all':
          let items = this.props.items.map((item, i) => {
            return (
              <ListItem
                deleteItem={this.props.deleteItem}
                key={i}
                data={item}
              />
            )
          })
          return items
        case 'complete':
          items = this.props.items
            .filter(item => {
              return item.completed
            })
            .map((item, i) => {
              return (
                <ListItem
                  deleteItem={this.props.deleteItem}
                  key={i}
                  data={item}
                />
              )
            })
          return items
        case 'incomplete':
          items = this.props.items
            .filter(item => {
              return !item.completed
            })
            .map((item, i) => {
              return (
                <ListItem
                  deleteItem={this.props.deleteItem}
                  key={i}
                  data={item}
                />
              )
            })
          return items
        default:
          break
      }
    }

    return (
      <div className="list-container">
        <div className="new-link">
          <Link to="/new" className="add-new">
            + Add New Item
          </Link>
        </div>
        <ListController />
        <div className="list">{list()}</div>
      </div>
    )
  }
}

export default List
