import React from 'react'

const Pagination = ({ totalPages, paginate, next, prev, currentPage }) => {
  

    return (
        <div>
            <nav className='flex justify-end my-4' aria-label="Page navigation example ">
                <ul className="inline-flex -space-x-px text-sm ">
                    <li>
                        <a onClick={prev} className="flex py-2 cursor-pointer items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                    </li>
                    {totalPages.map((item,i) => (
                        <li onClick={()=>paginate(item)}>
                            <a className={`${currentPage==i + 1 ? `flex items-center py-2 justify-center cursor-pointer px-3 h-8 leading-tight text-gray-500 bg-[#262626] border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 `:`flex items-center py-2 justify-center cursor-pointer px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400`} `}>{item}</a>
                        </li>
                    ))}

                    <li>
                        <a  onClick={next} className="flex py-2 cursor-pointer items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Pagination
