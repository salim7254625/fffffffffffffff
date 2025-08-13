import React from 'react'
import Ad from '../assets/Ad_1.png'
import Ad1 from '../assets/Ad_2.png'
import Ad2 from '../assets/Ad_3.png'
import Container from './Container'
const BannerOffer = () => {
    return (
        <>
            <Container>
                <div className='flex my-20'>
                    <div>
                        <img src={Ad} alt="" />
                    </div>
                    <div className='ml-5'>
                        <div> <img src={Ad1} alt="" /></div>
                        <div className='mt-8'> <img src={Ad2} alt="" /></div>
                    </div>
                </div>

            </Container>
        </>
    )
}

export default BannerOffer