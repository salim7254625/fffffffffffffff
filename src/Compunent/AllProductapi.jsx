import React, { useContext, useEffect, useRef, useState } from 'react'
import { ApiData } from './ContextApi'
import Container from './Container'
import { FaBars, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { MdLoop } from 'react-icons/md'
import Pagination from './Pagination'
import Post from './Post'


const AllProductapi = () => {

    let [categoryp, setCategoryp] = useState([])
    let [filterShow, setFilterShow] = useState([])

    let info = useContext(ApiData)
    let [parpage, setParpage] = useState(6)
    let [currentPage, setCurrentPage] = useState(1)
    let indexOfLastPost = currentPage * parpage;
    let indexOfFirstPost = indexOfLastPost - parpage;
    let currentPosts = info.slice(indexOfFirstPost, indexOfLastPost);

    let totalPages = []
    for (let i = 1; i <= Math.ceil(info.length / parpage); i++) {
        totalPages.push(i)
    }

    let paginate = (index) => {
        console.log("ami", index);
        setCurrentPage(index)
    }
    let next = () => {
        if (currentPage < totalPages.length) {
            setCurrentPage((state) => state + 1)
        }
    }
    let prev = () => {
        if (currentPage > 1) {
            setCurrentPage((state) => state - 1)
        }
    }
    let handelePerepageChange = (e) => {
        setParpage(e.target.value)

    }

    useEffect(() => {
        setCategoryp([...new Set(info.map((item) => item.category))])
    }, [info])

    let handelCateory = (citem) => {
        let cateFilter = info.filter((item) => item.category == citem)
        setFilterShow(cateFilter);

    }
    console.log(filterShow);
    
    return (
        <Container>
            <div className='flex justify-between py-12  px-5'>
                <div className='w-1/4 mr-2.5  '>
                    <div>
                        <ul className='group'>
                            <li className='font-bold text-[25px] text-[#262626] border-1 border-amber-100 py-3 px-3   '> Shop by Category  </li>
                            <ul className=' group invisible group-hover:visible'>
                                {categoryp.map((item) => (
                                    <li onClick={() => handelCateory(item)} className='font-semibold text-[16px] py-3.5 hover:font-bold hover:text-[20px] border-1 capitalize border-[#262626]'> {item} </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className='w-3/4'>
                    <div className='w-[100%] bg-amber-300 flex justify-between items-center px-5 py-2'>
                        <div className='flex items-center gap-2 mr-10'>
                            <div><FaBars /></div>
                            <div><FaBars /></div>
                        </div>
                        <div>
                            <label pr-2 htmlFor="">Sort by:</label>
                            <select name=" " id="" className='py-1 px-4 border-2 border-[#262626]'>
                                <option value="">beauty</option>
                                <option value="">fragrances</option>
                                <option value="">furniture</option>
                                <option value="">groceries</option>

                            </select>
                        </div>
                        <div>
                            <label pr-2 htmlFor="">Show</label>
                            <select onChange={handelePerepageChange} name=" " id="" className='py-1 px-4 border-2 border-[#262626]'>
                                <option value="6">6</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="30">30</option>
                            </select>
                        </div>
                    </div>
                    <div className=' '>
                        <Post currentPosts={currentPosts} filterShow={filterShow}/>
                    </div>
                </div>
            </div>
            <Pagination totalPages={totalPages} paginate={paginate} next={next} prev={prev} currentPage={currentPage} />
        </Container>
    )
}
export default AllProductapi
