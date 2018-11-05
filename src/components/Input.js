import React from 'react'

const Input = ({ label, name, handleChange, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label}: </label>
      <input
        onChange={handleChange}
        type={type}
        name={name}
        autoComplete={type}
        required
      />
    </div>
  )
}

export default Input
