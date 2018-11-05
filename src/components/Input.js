import React from 'react'

const Input = ({ label, name, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label}: </label>
      <input onChange={handleChange} type="text" name={name} />
    </div>
  )
}

export default Input
