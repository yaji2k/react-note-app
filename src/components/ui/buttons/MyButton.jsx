import React from 'react'
import classes from './button.module.css'

const MyButton = ({children, onClick, className}) => {
  return (
    <button
      className={[classes.button, className].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default MyButton