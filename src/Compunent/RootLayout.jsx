import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Banner from './Banner'
import BannerSlick from './BannerSlick'
import BannerOffer from './BannerOffer'
import ProductApi from './ProductApi'
// import Home from '../page/Home'

const RootLayout = () => {
    return (
        <>
        <Outlet/>
        <Banner  />
        <BannerSlick/>
        <BannerOffer/>
        <ProductApi/>
        <Footer/>
        </>
    )
}
export default RootLayout