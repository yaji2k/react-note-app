import React from 'react'
import Comment from '../comment/comment'
import cl from './comments.module.css'
const Comments = ({ comments, isLoad }) => {
  const commentsV = comments.map(comment => {
    return (
      <Comment
        name={comment.name}
        body={comment.body}
        email={comment.email}
        key={comment.id}
      />
    )
  })
  return (
    <div className={cl.comments}>
      <h4>Комментарии:</h4>
      {isLoad ? <div>Loading...</div> : commentsV}
    </div>
  )
}

export default Comments