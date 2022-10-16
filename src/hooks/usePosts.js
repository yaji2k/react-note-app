import { useMemo } from 'react'

export const useSortPosts = (posts, sort) => {
  return useMemo(() => {
    return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
  }, [posts, sort])
}

export const usePosts = (posts, sort, search) => {
  const sortPosts = useSortPosts(posts, sort)

  return useMemo(() => {
    return sortPosts.filter(post => (
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.body.toLowerCase().includes(search.toLowerCase())
    ))
  }, [search, sortPosts])
}
