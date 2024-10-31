import Link from 'next/link'
import logo from '@/assets/logo.png'
import Image from 'next/image.js'
import CartModal from '../../carrito/components/Cart/CartModal'
import Search from '../ui/Search'

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
  return (
    <header className='p-2 w-full h-auto fixed top-0 left-0 right-0 z-50 bg-[#171e26]'>
      <div className='max-w-7xl flex px-4 justify-between items-center mx-auto'>
        <Link href='/'><Image src={logo} className='w-20 lg:w-28 h-auto' alt='logo' /></Link>
        <nav className='md:flex items-center hidden gap-4 mx-auto'>
          {carnes.map(link => <Link key={link.id} className='text-white' href={link.path}>{link.name}</Link>)}
          <div className='md:flex hidden'>
            <Search />
          </div>
          <CartModal />
        </nav>
      </div>
    </header>
  )
}

export default NavBar
