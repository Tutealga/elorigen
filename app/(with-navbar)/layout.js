import CartProvider from '@/context/CartContext.js'
import '@/styles/globals.css'
import Footer from '@/app/(with-navbar)/components/Footer'
import NavBar from './components/NavBar/NavBar'
import BottomNavBar from './components/NavBar/BottomNavBar'

const RootLayout = ({ children }) => {
  return (
    <CartProvider>
      <NavBar />
      <BottomNavBar />
      <main className='min-h-screen'>
        {children}
      </main>
      <Footer />
    </CartProvider>
  )
}

export default RootLayout
