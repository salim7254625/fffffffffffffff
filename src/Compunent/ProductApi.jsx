import React from 'react'
import Productimg from '../assets/apiimg.png'
import Container from './Container'
const ProductApi = () => {
    return (
        <>
            <Container>
                <div className=''>
                    <h2 >New Arrivals</h2>
                    <div className='my-10'>
                        <img src={Productimg} alt="" />
                    </div>
                        <div>
                            <div className='flex items-center'>
                                <h2>Basic Crew Neck Tee</h2>
                                <p>$44.00</p>
                            </div>
                            <p>Black</p>
                        </div>
                </div>
            </Container>

        </>
    )
}

export default ProductApi
