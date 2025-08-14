import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Banner from './Banner'
import BannerSlick from './BannerSlick'
import BannerOffer from './BannerOffer'
import ProductApi from './ProductApi'
import AllProductapi from './AllProductapi'
import ProductApi2 from './ProductApi2'
import Ads from './Ads'
import SpecialOffers from './SpecialOffers'
// import Home from '../page/Home'

const RootLayout = () => {
    return (
        <>
        <Outlet/>
        <Banner  />
        <BannerSlick/>
        <BannerOffer/>
        <ProductApi/>
        <ProductApi2/>
        <Ads/>
        <SpecialOffers/>
        {/* <AllProductapi/> */}
        <Footer/>
        </>
    )
}
export default RootLayout