import React from 'react'
import '../styles/ListItem.css'

const ListItem = props => {
  let status = props.data.completed
    ? 'complete list-item'
    : 'incomplete list-item'
  let d = new Date(props.data.createdAt)
  let icons = {
    restaurant: 'fa fa-cutlery',
    park: 'fa fa-tree',
    show: 'fa fa-ticket',
    activity: 'fa fa-soccer-ball-o'
  }
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
        <div>
          <i className={icons[props.data.type]} />
        </div>
      </div>
      <div className="date">Created: {d.toLocaleDateString()}</div>
      <div className="buttons">
        <button>
          <i className="fa fa-heart-o fa-lg" /> {props.data.likes.length}
        </button>
        <button>
          <i className="fa fa-map-marker fa-lg" /> Map
        </button>
        {props.data.completed ? null : (
          <button name={props.data._id} onClick={props.changeStatus}>
            <i className="fa fa-check fa-lg" /> Mark Complete
          </button>
        )}

        <button>
          <i className="fa fa-pencil-square-o fa-lg" /> Edit
        </button>
        <button name={props.data._id} onClick={props.deleteItem}>
          <i className="fa fa-trash-o fa-lg" /> Delete
        </button>
      </div>
    </div>
  )
}

export default ListItem
