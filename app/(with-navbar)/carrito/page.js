import CartDetail from '@/app/(with-navbar)/carrito/components/Cart/CartDetail'

const Cart = () => {
  return (
    <div className='max-w-7xl mx-auto mt-24 py-4 min-h-screen flex flex-col items-center gap-4'>
      <h1 className='text-black sm:text-5xl text-3xl font-bold text-center'>Carrito</h1>
      <CartDetail />
    </div>
  )
}

export default Cart
