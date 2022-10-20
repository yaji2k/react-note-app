import React, { useContext } from 'react'
import { BrowserRouter, createBrowserRouter, RouterProvider, useRoutes } from 'react-router-dom'
import routes from './index'
import { useAuth } from '../hooks/useAuth'



const AppRouter = () => {
  const { user } = useAuth()

  return (
    <RouterProvider
      router={createBrowserRouter(routes)}
    />
  )
}

export default AppRouter
