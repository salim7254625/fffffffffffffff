import React from 'react'
import BannrSlick from '../assets/slick.png'
import Slider from 'react-slick'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

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

const BannerSlick = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }
    return (
        <>
            <Slider {...settings}>
                <div className='w-full img'>
                    <img className='w-full' src={BannrSlick} alt="" />
                </div>
                <div className='w-full'>
                    <img className='w-full' src={BannrSlick} alt="" />
                </div>
                <div className='w-full'>
                    <img className='w-full' src={BannrSlick} alt="" />
                </div>
                <div className='w-full'>
                    <img className='w-full' src={BannrSlick} alt="" />
                </div>
            </Slider>
        </>
    )
}

export default BannerSlick