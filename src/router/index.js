import Main from '../pages/Main'
import PostsPage from '../pages/PostsPage'
import PostPage from '../pages/PostPage'
import DefaultLayout from '../layouts/DefaultLayout'
import LoginPage from '../pages/LoginPage'
import NotFound from '../components/NotFound/NotFound'

const router = [
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '',
        element: <Main/>
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            element: <PostsPage/>,
          },
          {
            path: ':id',
            element: <PostPage/>
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <LoginPage/>,
  },
  {
    path: "*",
    element: <NotFound/>
  }
]

export default router
