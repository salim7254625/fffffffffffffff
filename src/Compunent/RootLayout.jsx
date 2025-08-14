import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navebar from '../Compunent/Navbar'
const RootLayout = () => {
    return (
        <>
    
      <Navebar  />
        <Outlet/>
        <Footer/>
        </>
    )
}
export default RootLayout