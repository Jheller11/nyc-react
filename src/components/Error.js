import React from 'react'
import '../styles/Error.css'

const Error = props => {
  return props.errorMessage ? (
    <div className="error-message">Error: {props.errorMessage}</div>
  ) : (
    <div />
  )
}

export default Error
