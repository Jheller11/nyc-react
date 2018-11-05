import React from 'react'

const Error = props => {
  return props.errorMessage ? (
    <div>{props.errorMessage}</div>
  ) : (
    <div>no error</div>
  )
}

export default Error
