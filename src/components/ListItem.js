import React from 'react'

const ListItem = props => {
  return (
    <div className="list-item">
      <div>{props.name}</div>
      <div>{props.createdAt}</div>
      <div>{props.completed}</div>
      <div>{props.likes.length}</div>
      <div>{props.id}</div>
      <div>{props.location}</div>
      <div>{props.addedBy}</div>
      <div>{props.link}</div>
      <div>{props.type}</div>
    </div>
  )
}

export default ListItem
