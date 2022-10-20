import React from 'react'
import '../../styles/app.css'
import NavMenu from '../../components/NavMenu'
import { Outlet } from 'react-router-dom'

function DefaultLayout() {
  return (
    <div>
      <NavMenu />
      <Outlet/>
    </div>
  )
}

export default DefaultLayout;
