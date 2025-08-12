import React, { createRef, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaBars, FaCartArrowDown, FaUser } from 'react-icons/fa'
import { IoMdSearch } from 'react-icons/io'
import { MdArrowDropDownCircle } from 'react-icons/md'
import Imgp from '../assets/image.png'

const Banner = () => {
    let [category, setCategory] = useState(false)
    let cateRef = useRef();
    let [chekList, setChekList] = useState(false)
    let chek = useRef();

    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cateRef.current.contains(e.target)) {
                setCategory(!category)
            } else {
                setCategory(false)
            }
       
        })
        document.addEventListener("click", (e) => {
            if (chek.current.contains(e.target)) {
                setChekList(!chekList)
            } else {
                setChekList(false)
            }
       
        })
    },[cateRef, chek])
    return (
        <div>
            <Container>

                <div className='flex justify-between items-center '>
                    <div className='w-1/4 flex items-center relative group'>
                        <div><FaBars /></div>
                        <div className=' pl-3 '><p>Shop by Category</p></div>

                        <div className=' py-3 absolute top-[50px] left-0 w-[250px] opacity-0 group-hover:opacity-100'>
                            <ul className='bg-[#000000]'>
                                <li className='text-[14px] text-[#ffffffac] pl-2 py-3 hover:border-1 border-[#fff] hover:pl-6 hover:text-[#FFF] hover:font-bold  '>Accesories</li>
                                <li className='text-[14px] text-[#ffffffac] pl-2 py-3 hover:border-1 border-[#fff] hover:pl-6 hover:text-[#FFF] hover:font-bold  '>Furniture</li>
                                <li className='text-[14px] text-[#ffffffac] pl-2 py-3 hover:border-1 border-[#fff] hover:pl-6 hover:text-[#FFF] hover:font-bold  '>Electronics</li>
                                <li className='text-[14px] text-[#ffffffac] pl-2 py-3 hover:border-1 border-[#fff] hover:pl-6 hover:text-[#FFF] hover:font-bold  '>Clothes</li>
                                <li className='text-[14px] text-[#ffffffac] pl-2 py-3 hover:border-1 border-[#fff] hover:pl-6 hover:text-[#FFF] hover:font-bold  '>Bags</li>
                                <li className='text-[14px] text-[#ffffffac] pl-2 py-3 hover:border-1 border-[#fff] hover:pl-6 hover:text-[#FFF] hover:font-bold  '>Home appliances</li>
                            </ul>
                        </div>
                    </div>

                    <div className='w-2/4 relative mx-auto border-2  items-center bg-[#FFF] border-amber-50  '>
                        <div className=' '>
                            <input className='py-3 w-full pl-5' type="search" placeholder='Search Products ' />
                        </div>
                        <div className=' absolute top-[50%] translate-y-[-50%] right-[15px] '><IoMdSearch /></div>
                    </div>


                    <div className='w-1/4 flex justify-end cursor-pointer'>
                        <div ref={cateRef} className='flex pr-9 relative'>
                            <div><FaUser /></div>
                            <div><MdArrowDropDownCircle /></div>
                            {category && <div className=' absolute top-7 right-[30px] w-[300px]  '>
                                <ul>
                                    <li className=' py-3 font-bold text-[17px] text-center px-16 text-[#000000] bg-[#FFF] hover:bg-[#000000] hover:text-[#FFFFFF] border-1 border-b-black'>My Account</li>
                                    <li className='py-3 font-bold text-[17px] text-center px-16 text-[#000000] bg-[#FFF] hover:bg-[#000000] hover:text-[#FFFFFF]  border-1 border-b-black'>Log Out</li>
                                </ul>
                            </div>
                            }
                        </div>

                        <div className=' relative ' ref={chek} ><FaCartArrowDown />

                             {chekList &&
                                <div className='w-[360px] h-[241px] border-2 border-amber-200 absolute top-8 left-[-100px] '>
                                    <div className='flex h-[50%] bg-[#F5F5F3]'>
                                        <div className=''><img className='pt-3 pl-3' src={Imgp} alt="" /></div>
                                        <div className='pt-5 pl-4'> <h2 className='font-bold text-[14px]'>Black Smart Watch</h2>
                                            <p className='font-bold text-[14px]'>$44.00</p>
                                        </div>
                                    </div>
                                    <div className='h-[20%]'>
                                        <p className='font-normal text-[16px] my-4 pl-3'>Subtotal:<span className='font-extrabold'>$44.00</span> </p>
                                    </div>
                                    <div className='h-[30%] flex justify-center '>
                                        <div><h2 className='py-3 px-5 border-1 mr-2 border-[#000000] hover:bg-black hover:text-[#FFF]'>View Cart</h2></div>
                                        <div><h2 className='py-3 px-5 border-1 ml-2 border-[#000000] hover:bg-black hover:text-[#FFF]'>Checkout.</h2></div>
                                    </div>
                                </div>
                            } 
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Banner
