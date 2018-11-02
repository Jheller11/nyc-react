import React from 'react'
import '../styles/ListItem.css'

const ListItem = props => {
  let status = props.data.completed
    ? 'complete list-item'
    : 'incomplete list-item'
  return (
    <div className={status}>
      <div>{props.data.name}</div>
      <div>{props.data.createdAt}</div>
      <div>{props.data.id}</div>
      <div>{props.data.likes.length}</div>
      <div>{props.data.location}</div>
      <div>{props.data.addedBy}</div>
      <div>{props.data.link}</div>
      <div>{props.data.type}</div>
      <div>{props.data.private}</div>
    </div>
  )
}

export default ListItem
