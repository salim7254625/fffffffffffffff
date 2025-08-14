import React from 'react'
import Banner from '../Compunent/Banner'
import BannerSlick from '../Compunent/BannerSlick'
import BannerOffer from '../Compunent/BannerOffer'
import ProductApi from '../Compunent/ProductApi'
import ProductApi2 from '../Compunent/ProductApi2'
import Ads from '../Compunent/Ads'
import SpecialOffers from '../Compunent/SpecialOffers'


const Home = () => {
  
  return (
    <>

      <Banner />
      <BannerSlick />
      <BannerOffer />
      <ProductApi />
      <ProductApi2 />
      <Ads />
      <SpecialOffers />

    </>
  )
}

export default Home
