import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PostsPage from '../pages/PostsPage'
import Main from '../pages/Main'
import PostPage from '../pages/PostPage'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/posts" element={<PostsPage />}/>
      <Route path="/posts/:id" element={<PostPage/>}/>
      <Route path="/" element={<Main />}/>
    </Routes>
  )
}

export default AppRouter