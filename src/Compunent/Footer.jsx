import React from 'react'
import Container from './Container'
import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
      <section className='bg-[#F5F5F3] pb-32 pt-7 '>
        <Container>
          <div className='flex justify-between'>
            <div className='w-15%'>

              <a className='hover:text-[#000000] hover:font-bold pt-3 block font-bold text-[16px]' href="#">MENU</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block' href="#">Home</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block' href="#">Shop</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block' href="#">About</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block' href="#">Contact</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block' href="#">Journal</a>
            </div>
            <div className='w-15%'>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block font-bold text-[16px]' href="#">SHOP</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block' href="#">Category 1</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block' href="#">Category 1</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block' href="#">Category 1</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block' href="#">Category 1</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block' href="#">Category 1</a>
            </div>
            <div className='w-20%'>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block font-bold text-[16px]' href="#">HELP</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block ' href="#">Privacy Policy</a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block ' href="#">Terms & Conditions </a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block ' href="#">Special E-shop </a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block ' href="#">Shipping </a>
              <a className='hover:text-[#000000] hover:font-bold pt-3 block ' href="#">Secure Payments</a>
            </div>
            <div className='w-25%'>
              <h2 className='font-bold text-[16px] pt-3 hover:text-[#000000] hover:font-bold'>(052) 611-5711</h2>
              <h2 className='font-bold text-[16px] pt-3 hover:text-[#000000] hover:font-bold'>
                company@domain.com</h2>
                <p className='mt-7'>575 Crescent Ave. Quakertown, PA 18951</p>
            </div>
            <div className='w-25%'>
              <div className='mt-5'>
                    <img src={Logo} alt="" />
              </div>
           
              <p className='mt-30 hover:text-[#000000] hover:font-bold'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
export default Footer
