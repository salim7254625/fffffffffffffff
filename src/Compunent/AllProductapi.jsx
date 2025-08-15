import React, { useContext } from 'react'
import { ApiData } from './ContextApi'
import Container from './Container'
import { FaBars, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdLoop } from 'react-icons/md'
import Pagination from './Pagination'
import Post from './Post'
// import Post from './Post'

const AllProductapi = () => {
    let info = useContext(ApiData)
    return (
        <Container>


            <div className='flex justify-between  px-5'>
                <div className='1/5'>
                    <h1>Shop by Category</h1>
                </div>
                <div className='4/5 flex'>
                    <div className='flex items-center gap-2 mr-10'>
                        <div><FaBars /></div>
                        <div><FaBars /></div>
                    </div>

                    <div>
                        <label htmlFor="">Show</label>
                        <select name=" " id="">
                            <option value="">10</option>
                            <option value="">10</option>
                            <option value="">10</option>
                            <option value="">10</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className=' '>
                <Post info={info} />     
            </div>


            {/* {
                        dataa.map((item) => (
                            <div  className='mt-30  w-[100%]  relative group   '>
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
                    } */}


            <Pagination />
        </Container>
    )
}
export default AllProductapi
