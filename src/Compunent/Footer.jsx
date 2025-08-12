import React from 'react'
import Container from './Container'

const Footer = () => {
  return (
    <>
      <section className='bg-[#F5F5F3] pb-32 pt-7 '>
        <div><h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptatem ducimus dignissimos fuga vel! Incidunt voluptatum maxime quos placeat numquam, ad tempore magni pariatur. Rem porro, reiciendis assumenda nam autem ducimus, totam illo expedita nobis delectus tenetur sunt mollitia, omnis reprehenderit ab qui itaque dolorum quaerat voluptate numquam nemo nesciunt! Nisi, ipsa, corporis eveniet ad suscipit asperiores quae, quod adipisci fugit dolorum inventore quas tempora est. Soluta nemo velit consequuntur vitae ea delectus iusto maxime! Saepe excepturi, exercitationem velit fuga ab voluptas molestias nostrum. Sit soluta minima voluptas impedit, perspiciatis quidem corrupti beatae mollitia nulla sint esse, sapiente nesciunt nihil?</h1></div>
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
              <h2 className='font-extrabold text-[70px] hover:text-[#000000] hover:font-bold'>OBERI</h2>
              <p className='mt-30 hover:text-[#000000] hover:font-bold'>2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Footer
