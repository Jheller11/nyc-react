import React from 'react'

const ListController = props => {
  return (
    <div>
      <form>
        <label htmlFor="view">View:</label>
        <select type="select">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Not Complete</option>
        </select>
        <label htmlFor="type">Type:</label>
        <select type="select">
          <option value="all">All</option>
          <option value="restaurant">Restaurant</option>
          <option value="park">Park</option>
          <option value="show">Show</option>
          <option value="activity">Activity</option>
        </select>
        <label htmlFor="owner">Added By:</label>
        <select type="select">
          <option value="me">Me</option>
          <option value="others">Others</option>
        </select>
        <input type="submit" value="Apply" />
      </form>
    </div>
  )
}

export default ListController
