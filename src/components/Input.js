import React from 'react'
import '../styles/Input.css'

const Input = ({ label, name, handleChange, type }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label}: </label>
      <input
        className="input"
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
