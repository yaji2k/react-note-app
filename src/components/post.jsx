import React from 'react'
import classes from '../styles/post.module.css'
import MyButton from './ui/buttons/MyButton'
import { useNavigate } from 'react-router-dom'

const Post = ({ id, title, body, onDelete }) => {
  const navigate = useNavigate()

  return (
    <div className={classes.post}>
      <div>
        <strong>{id}. {title}</strong>
        <div className={classes.postBody}>{body}</div>
      </div>
      <div className={classes.removeBtn}>
        <MyButton onClick={() => navigate(`${id}`)}>Open</MyButton>
      </div>
      <div className={classes.removeBtn}>
        <MyButton onClick={onDelete}>Delete</MyButton>
      </div>
    </div>
  )
}

export default Post