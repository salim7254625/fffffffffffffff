import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Banner from './Banner'
// import Home from '../page/Home'

const RootLayout = () => {
    return (
        <>
        <Outlet/>
        <Banner  />
        <Footer/>
        </>
    )
}
export default RootLayout