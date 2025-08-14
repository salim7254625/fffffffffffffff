import React, { useContext, useState } from 'react'
import Slider from 'react-slick'
import { ApiData } from './ContextApi'
import Container from './Container'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdLoop } from 'react-icons/md'
// import { Link } from 'react-router-dom'

function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
        <div className='lg:w-[50px] w-[30px] lg:h-[50px] h-[30px] border-none rounded-full flex justify-center items-center bg-amber-800 absolute top-[50%] translate-y-[-50%] right-0 z-[1]' onClick={onClick}
        >
            <FaArrowAltCircleRight className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer' />
        </div>
    );
}
function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
        <div className='lg:w-[50px] w-[50px] lg:h-[50px] h-[50px]  border-none rounded-full flex justify-center items-center bg-amber-800 absolute top-[50%] translate-y-[-50%] left-0 z-[1]' onClick={onClick}>
            <FaArrowAltCircleLeft className='lg:w-[30px] w-[20px] lg:h-[30px] h-[20px] cursor-pointer ' />
        </div>
    );
}

const ProductApi = () => {
    let dataa = useContext(ApiData)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    //  let [apidataa, apisetData] = useState(false)
    //   let AllProduc = (() => {
    //     apisetData(Link(`<AllProductapi />`))
    //   })

    return (
        <>
            <Container>
                <div><h2 className='font-bold text-[39px]'>New Arrivals</h2></div>
                <Slider {...settings}>
                    {
                        dataa.map((item) => (
                            <div className='mt-7  w-[100%]  relative group   '>
                                <div className=' relative hob m-2'><img className='w-full relative group' src={item.images} alt="" />
                                    <h1 className=' abb absolute top-[10px] left-[10px] bg-[#000000] py-2 px-7 text-[#FFF]  '>NEW</h1>

                                    <div className='absolute bottom-0 right-0 bg-[#FFF] opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out w-full'>
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
                                <div className='flex justify-around px-5 py-3'>
                                    <div>{item.title}</div>
                                    <div> {item.price + " " + "$"}</div>
                                </div>
                            </div>
                        ))
                    }
                </Slider>

            </Container>
        </>
    )
}

export default ProductApi