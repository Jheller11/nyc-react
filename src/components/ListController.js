import React from 'react'

const ListController = props => {
  return (
    <div>
      <form>
        <label for="view">View:</label>
        <select type="select">
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Not Complete</option>
        </select>
        <label for="type">Type:</label>
        <select type="select">
          <option value="all">All</option>
          <option value="restaurant">Restaurant</option>
          <option value="park">Park</option>
          <option value="show">Show</option>
          <option value="activity">Activity</option>
        </select>
        <label for="owner">Added By:</label>
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
