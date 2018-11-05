import React from 'react'
import '../styles/ListItem.css'

const ListItem = props => {
  let status = props.data.completed
    ? 'complete list-item'
    : 'incomplete list-item'
  let d = new Date(props.data.createdAt)
  return (
    <div className={status}>
      <div className="top-row">
        <div>
          <a href={props.data.link} target="_blank" rel="noopener noreferrer">
            {props.data.name}
          </a>
        </div>
        <div>{props.data.addedBy}</div>
        <div>{props.data.location}</div>
      </div>
      <div className="buttons">
        <button>
          <i className="fa fa-heart-o fa-lg" /> {props.data.likes.length}
        </button>
        <button>
          <i className="fa fa-map-marker fa-lg" /> Map
        </button>
        <button>
          <i className="fa fa-check fa-lg" /> Change Status
        </button>
        <button>
          <i className="fa fa-pencil-square-o fa-lg" /> Edit
        </button>
        <button>
          <i className="fa fa-trash-o fa-lg" /> Delete
        </button>
      </div>
    </div>
  )
}

export default ListItem

/* <div>{props.data.name}</div>
      <div>{props.data.createdAt}</div>
      <div>{props.data._id}</div>
      <div>{props.data.likes.length}</div>
      <div>{props.data.location}</div>
      <div>{props.data.addedBy}</div>
      <div>{props.data.link}</div>
      <div>{props.data.type}</div>
      <div>{props.data.private ? 'private' : 'public'}</div> */
