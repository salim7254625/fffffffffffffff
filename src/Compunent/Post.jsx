import React, { useContext } from 'react'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdLoop } from 'react-icons/md'
import { Link } from 'react-router-dom'


const Post = ({ currentPosts }) => {
    return (
        <>
        <div className='flex flex-wrap justify-between gap-5'>

            {
                
                currentPosts.map((item) => (
                    <div className='w-[48%]  relative group border-1 border-amber-100 mt-4 shadow-xl'>
                        <div className=' relative hob m-2  '>
                            <Link >
                                <img className='w-full relative group' src={item.images} alt="" />
                            </Link>
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
        </div>
        </>
    )
}

export default Post