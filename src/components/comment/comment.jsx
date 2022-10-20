import React from 'react'
import cl from './comments.module.css'
const Comment = ({ name, body, email }) => {
  return (
    <div className={cl.comment}>
      <div className={cl.commentHeader}>
        <strong>{name}</strong>
      </div>
      <p>{body}</p>
      <div className={cl.commentFooter}>
        <i>{email}</i>
      </div>
    </div>
  )
}

export default Comment