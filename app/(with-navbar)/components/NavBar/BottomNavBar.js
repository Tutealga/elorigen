'use client'

import { useState } from 'react'
import CartModal from '../../carrito/components/Cart/CartModal'
import Link from 'next/link'
import Search from '../ui/Search'

const BottomNavBar = () => {
  const [state, setState] = useState(false)

  return (
    <>
      <div className={`${state ? 'fixed' : 'hidden'} z-50 flex bottom-[68px] bg-[#171e26] bg-opacity-80 backdrop-blur-md w-full items-center justify-center h-auto p-2`}>
        <Search />
      </div>
      <nav className='w-full fixed bg-[#171e26] bottom-0 z-50 md:hidden grid grid-cols-4 overflow-x-auto h-auto backdrop-blur-md bg-opacity-80'>
        <Link href='/' className='flex items-center justify-center p-3 text-white'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512' width='20' height='20'>
            <path fill='#ffffff' d='M36.8 192H603.2c20.3 0 36.8-16.5 36.8-36.8c0-7.3-2.2-14.4-6.2-20.4L558.2 21.4C549.3 8 534.4 0 518.3 0H121.7c-16 0-31 8-39.9 21.4L6.2 134.7c-4 6.1-6.2 13.2-6.2 20.4C0 175.5 16.5 192 36.8 192zM64 224V384v80c0 26.5 21.5 48 48 48H336c26.5 0 48-21.5 48-48V384 224H320V384H128V224H64zm448 0V480c0 17.7 14.3 32 32 32s32-14.3 32-32V224H512z' />
          </svg>
        </Link>
        <div className='flex items-center justify-center p-3 text-white'>
          <button className='relative' onClick={() => setState(prevState => !prevState)}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='20' height='20'>
              <path fill='#ffffff' d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
            </svg>
          </button>
        </div>
        <div className='flex items-center justify-center p-3'>
          <CartModal />
        </div>
        <Link href='https://api.whatsapp.com/send/?phone=5491126841364&amp;text=Hola%21+Me+gustar%C3%ADa+realizar+un+pedido.&amp;app_absent=0' className='flex items-center justify-center p-3'>
          <div className='bg-[#25d366] rounded-full p-2'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' width='20' height='20'>
              <path fill='#ffffff' d='M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z' />
            </svg>
          </div>
        </Link>
      </nav>
    </>
  )
}

export default BottomNavBar
