import React from 'react'

const ListItem = props => {
  return (
    <div className="list-item">
      <div>{props.data.name}</div>
      <div>{props.data.createdAt}</div>
      <div>{props.data.completed}</div>
      <div>{props.data.id}</div>
      <div>{props.data.likes}</div>
      <div>{props.data.location}</div>
      <div>{props.data.addedBy}</div>
      <div>{props.data.link}</div>
      <div>{props.data.type}</div>
      <div>{props.data.private}</div>
      <div>hello</div>
    </div>
  )
}

export default ListItem
