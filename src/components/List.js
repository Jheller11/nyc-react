import React from 'react'
import ListItem from './ListItem'

const List = props => {
  let items = props.items.map((item, i) => {
    return <ListItem key={i} data={item} />
  })
  return <div>{items}</div>
}

export default List
