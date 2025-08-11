import React from 'react'
import Navbar from '../components/NavBar'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
   <>
   <Navbar/>
   <Outlet/>
   </>
  )
}

export default MainLayout