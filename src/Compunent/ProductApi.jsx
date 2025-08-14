import React, { useContext } from 'react'
import Productimg from '../assets/apiimg.png'
import Container from './Container'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdLoop } from 'react-icons/md'

const ProductApi = () => {
    let data = useContext(apiData)
    return (
        <>
            <Container>
                <div className=' w-1/4'>
                    <h2 className='' >New Arrivals</h2>

                    {
                      
                    }

                    <div className='mt-10 relative group '>
                        <img  src={Productimg} alt="" />

                        <div className=' absolute bottom-0 right-0 bg-[#FFFF] p-4 items-center w-full opacity-0 invisible group-hover:visible transition duration-500 ease-in-out group-hover:opacity-100 z-100 '>
                            <div className='flex items-center gap-4 py-2 cursor-pointer justify-end'>
                                <p>Add to Wish List</p>
                                <FaHeart />
                            </div>
                            <div className='flex items-center gap-4 py-2 cursor-pointer justify-end'>
                                <MdLoop />
                            </div>
                            <div className='flex items-center gap-4 py-2 cursor-pointer justify-end'>
                                <p>Add to Cart</p>
                                <FaShoppingCart />
                            </div>

                        </div>
                    </div>

                    <div className='py-5'>
                        <div className='flex items-center justify-between px-3 '>
                            <h2>Basic Crew Neck Tee</h2>
                            <p>$44.00</p>
                        </div >
                        <p className='px-3 py-3'>Black</p>
                    </div>
                </div>
            </Container>

        </>
    )
}

export default ProductApi
