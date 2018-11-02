import React from 'react'
import ListItem from './ListItem'
import '../styles/List.css'

const List = props => {
  let items = props.items.map((item, i) => {
    return <ListItem key={i} data={item} />
  })
  return <div className="list">{items}</div>
}

export default List
