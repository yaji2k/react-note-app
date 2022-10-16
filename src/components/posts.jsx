import React from 'react'
import Post from './post'

const Posts = ({ items, onDelete }) => {
  if (!items.length) {
    return <p style={{textAlign: 'center'}}>Посты не найдены</p>
  }

  const posts = items.map(({ id, title, body }) => (
    <Post id={id} title={title} body={body} key={id} onDelete={() => {onDelete(id)}} />
  ))
  return (
    <div>
      {posts}
    </div>
  )
}

export default Posts