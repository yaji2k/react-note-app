import React, { useEffect, useState } from 'react'
import { useParams, useRoutes } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../api/PostService'

const PostPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})

  const [fetchPost] = useFetching(async() => {
    const resp = await PostService.getOne(params.id)
    setPost(resp.data)
  })

  useEffect(() => {
    fetchPost()
  }, [])

  return (
    <div>
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </div>
  )
}

export default PostPage