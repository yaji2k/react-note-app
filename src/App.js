import React from 'react'
import './styles/app.css'
import AppRouter from './components/AppRouter'
import NavMenu from './components/NavMenu'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavMenu />
      <AppRouter />
    </BrowserRouter>
  )
}

export default App;
