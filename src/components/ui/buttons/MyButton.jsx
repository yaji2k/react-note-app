import React from 'react'
import classes from './button.module.css'

const MyButton = ({children, onClick}) => {
  return (
    <button
      className={classes.button}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default MyButton