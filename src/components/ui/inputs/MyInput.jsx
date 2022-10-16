import React from 'react'
import classes from './input.module.css'

const MyInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className={ classes.input }
      value={value}
      onChange={onChange}
    />
  )
}

export default MyInput