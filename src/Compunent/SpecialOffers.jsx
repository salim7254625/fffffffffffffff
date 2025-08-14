import React from 'react'
import SpecialOffers0 from '../assets/Product_1.png'
import SpecialOffers2 from '../assets/Product_2.png'
import SpecialOffers3 from '../assets/Product_3.png'
import SpecialOffers4 from '../assets/Product_4.png'
import Container from './Container'
const SpecialOffers = () => {
    return (
        <Container>
            <div><h2 className='font-bold text-[39px]'>Special Offers.</h2></div>
            <div className='flex gap-4 my-10'>
                <img src={SpecialOffers0} alt="" />
                <img src={SpecialOffers2} alt="" />
                <img src={SpecialOffers3} alt="" />
                <img src={SpecialOffers4} alt="" />
            </div>

        </Container>
    )
}

export default SpecialOffers
