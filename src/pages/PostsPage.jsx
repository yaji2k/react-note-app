import React, { useContext, useEffect, useState } from 'react'
import { usePosts } from '../hooks/usePosts'
import { useFetching } from '../hooks/useFetching'
import PostService from '../api/PostService'
import MyButton from '../components/ui/buttons/MyButton'
import FilterComponent from '../components/FilterComponent'
import Loader from '../components/Loader/Loader'
import Posts from '../components/posts'
import Pagination from '../components/Pagination/Pagination'
import Modal from '../components/MyModal/modal'
import CreatePost from '../components/createPost'
import { useOutletContext } from 'react-router-dom'

const PostsPage = () => {
  const [posts, setPosts] = useState([])
  const [post, setPost] = useState({ title: '', body: '' })
  const [filter, setFilter] = useState({
    search: '',
    sort: 'title'
  })
  const [visible, setVisible] = useState(false)
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [limit] = useState(10)
  const filteredPosts = usePosts(posts, filter.sort, filter.search)

  const [fetching, isLoad, error] = useFetching(async (params) => {
    const response = await PostService.getAll(params)
    setPosts(response.data)
    setTotal(parseInt(response.headers['x-total-count'], 10))
  })

  useEffect(() => {
    fetching({
      _page: page,
      _limit: limit
    })
  }, [page, limit])

  const onInputTitle = (e) => {
    setPost({
      ...post,
      title: e.target.value
    })
  }

  const onInputText = (e) => {
    setPost({
      ...post,
      body: e.target.value
    })
  }

  const createPost = (e) => {
    e.preventDefault()
    setPosts([...posts, {
      ...post,
      id: posts.length + 1
    }])
    setPost({
      title: '',
      body: ''
    })
    setVisible(false)
  }

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  return (
    <div className="app">
      <div style={{marginBottom: '20px' }}>
        <MyButton onClick={() => setVisible(true)}>Create</MyButton>
      </div>
      <FilterComponent
        filter={filter}
        changeFilter={setFilter}
      />
      { error && (<div>{error}</div>) }
      { isLoad ? <Loader /> : <Posts items={filteredPosts} onDelete={deletePost} /> }
      <Pagination
        page={page}
        total={total}
        limit={limit}
        changePage={setPage}
      />
      <Modal visible={visible} setVisible={setVisible}>
        <CreatePost
          post={post}
          createPost={createPost}
          onInputTitle={onInputTitle}
          onInputText={onInputText}
        />
      </Modal>
    </div>
  );
}

export default PostsPage