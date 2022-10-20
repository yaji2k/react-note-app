import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import PostService from '../api/PostService'
import Comments from '../components/comments/comments'

const PostPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPost] = useFetching(async() => {
    const resp = await PostService.getOne(params.id)
    setPost(resp.data)
  })

  const [fetchComments, isLoadComments] = useFetching(async () => {
    const res = await PostService.getComments(params.id)
    setComments(res.data)
  })

  useEffect(() => {
    fetchPost()
    fetchComments()
  }, [])

  return (
    <div className="post-page">
      <h3 className="post- title">{post.title}</h3>
      <p>{post.body}</p>
      <Comments
        isLoad={isLoadComments}
        comments={comments}
      />
    </div>
  )
}

export default PostPage