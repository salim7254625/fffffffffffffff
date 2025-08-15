import React, { useContext, useState } from 'react'
import { ApiData } from './ContextApi'
import Container from './Container'
import { FaBars, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdLoop } from 'react-icons/md'
import Pagination from './Pagination'
import Post from './Post'
// import Post from './Post'

const AllProductapi = () => {
    let info = useContext(ApiData)
    let [parpage , setParpage] =useState(6)
    let [currentPage, setCurrentPage] = useState(1)
    let indexOfLastPost = currentPage * parpage;
    let indexOfFirstPost = indexOfLastPost - parpage;
    let currentPosts = info.slice(indexOfFirstPost, indexOfLastPost);

    let totalPages = []
    for (let i = 1; i <= Math.ceil(info.length / parpage); i++) {
        totalPages.push(i)
    }
    
    
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
                <Post currentPosts={currentPosts} />     
            </div>

            <Pagination totalPages={totalPages} />
        </Container>
    )
}
export default AllProductapi
