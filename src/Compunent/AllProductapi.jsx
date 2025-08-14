import React, { useContext } from 'react'
import { ApiData } from './ContextApi'
import Container from './Container'

const AllProductapi = () => {
    let dataa = useContext(ApiData)
    return (
        <Container>

            <div className='grid grid-cols-4'>
                {
                    dataa.map((item) => (
                        <>
                            <div className=' border-2 border-gray-300 m-2 p-2'>
                                <img className='w-full' src={item.images} alt="" />
                                <div className='flex justify-around'>
                                    <h2>{item.title}</h2>
                                    <p>{item.price + " " + "$"}</p>
                                </div>
                            </div>
                        </>
                    ))
                }
            </div>
        </Container>
    )
}

export default AllProductapi
