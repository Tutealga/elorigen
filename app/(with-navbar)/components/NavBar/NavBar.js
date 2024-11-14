'use client'

import Link from 'next/link'
import logo from '@/assets/logo.png'
import Image from 'next/image.js'
import CartModal from '../../carrito/components/Cart/CartModal'
import Search from '../ui/Search'
import useHeaderState from '@/hooks/useHeaderState'

const carnes = [
  { id: 1, path: '/', name: 'Inicio' },
  { id: 2, path: '/cortes-vacunos', name: 'Vacunos' },
  { id: 3, path: '/cortes-cerdo', name: 'Cerdo' },
  { id: 4, path: '/cortes-pollo', name: 'Pollo' },
  { id: 5, path: '/embutidos-y-achuras', name: 'Embutidos y Achuras' },
  { id: 6, path: '/preparados', name: 'Preparados' },
  { id: 7, path: '/almacen', name: 'Almacén' }
]

const NavBar = () => {
  const { isOpen, openMenu, closeMenu } = useHeaderState()

  return (
    <>
    {
      isOpen
      ?
      <header className='fixed top-0 left-0 w-full items-center justify-center p-3 h-auto z-[999] text-black'>
          <nav className='fixed top-0 bottom-0 left-0 w-full h-screen bg-[#171e26] md:hidden z-[60]'>
            <button onClick={closeMenu} className='absolute top-0 right-0 h-auto w-[35px] z-[70] mt-3 mr-3'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512' height='auto' width='35px' fill='#ffffff'>
                <path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
              </svg>
            </button>
            <div className='flex flex-col items-center py-20 h-full w-full gap-12'>
              <ul className='flex flex-col items-center justify-center gap-6 z-[70] w-full font-normal'>
              {carnes.map(link => <Link key={link.id} onClick={closeMenu} className='text-white text-xl' href={link.path}>{link.name}</Link>)}
              </ul>
            </div>
          </nav>
          </header>
          :
      <header className='p-2 w-full h-auto fixed top-0 left-0 right-0 z-50 bg-[#171e26]'>
      <div className='max-w-7xl flex px-4 justify-between items-center mx-auto'>
        <Link href='/'><Image src={logo} className='w-20 lg:w-28 h-auto' alt='logo' /></Link>
        <nav className='md:flex items-center hidden gap-4 mx-auto'>
          {carnes.map(link => <Link key={link.id} className='text-white text-sm' href={link.path}>{link.name}</Link>)}
          <div className='md:flex hidden'>
            <Search />
          </div>
          <CartModal />
        </nav>
        <button onClick={openMenu} className='flex items-center justify-center md:hidden h-auto w-[35px]'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512' height='auto' width='35px' fill='#ffffff'>
                <path d='M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z' />
              </svg>
            </button>
      </div>
    </header>
    }
    </>
  )
}

export default NavBar
