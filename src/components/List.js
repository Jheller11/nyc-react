import React from 'react'
import ListItem from './ListItem'

const List = props => {
  let items = this.props.items.map(item => {
    return <ListItem props={item} />
  })
  return <div>{items}</div>
}

export default List
