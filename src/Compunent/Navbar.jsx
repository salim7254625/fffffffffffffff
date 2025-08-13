import React from 'react'
import Container from './Container'
import Logo from '../assets/logo.png'
const Navebar = () => {
    return (
        <>
            <Container>
                <div className='flex  items-center py-6'>
                    <div className='w-1/2'>
                        <div><img src={Logo} alt="" /></div>
                    </div>
                    <div className='w-1/2'>
                        <ul  className='flex items-center gap-4'> 
                            <li><a className='font-bold text-[#262626]  ' href="#">Home</a></li>
                            <li><a className='font-bold text-[#767676] hover:text-[#262626] ' href="#">Shop</a></li>
                            <li><a className='font-bold text-[#767676] hover:text-[#262626] ' href="#">About</a></li>
                            <li><a className='font-bold text-[#767676] hover:text-[#262626] ' href="#">Contacts</a></li>
                            <li><a className='font-bold text-[#767676] hover:text-[#262626] ' href="#">Journal</a></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </>

    )
}

export default Navebar