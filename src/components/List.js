import React, { Component } from 'react'
import ListItem from './ListItem'
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
            return <ListItem key={i} data={item} />
          })
          return items
        case 'complete':
          items = this.props.items
            .filter(item => {
              return item.completed
            })
            .map((item, i) => {
              return <ListItem key={i} data={item} />
            })
          return items
        case 'incomplete':
          items = this.props.items
            .filter(item => {
              return !item.completed
            })
            .map((item, i) => {
              return <ListItem key={i} data={item} />
            })
          return items
        default:
          break
      }
    }

    return <div className="list">{list()}</div>
  }
}

export default List
