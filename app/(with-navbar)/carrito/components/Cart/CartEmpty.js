import Link from 'next/link'

const CartEmpty = () => {
  return (
    <div className='flex flex-col gap-4 items-center py-20'>
      <i className='fa-solid fa-cart-shopping text-[12rem]' />
      <h2 className='font-bold sm:text-4xl text-3xl text-center'>¡No hay productos en tu carrito!</h2>
      <p className='text-lg'>Añade productos a tu carrito antes de proceder a finalizar la compra.</p>
      <Link className='bg-red-900 text-white p-4 rounded' href='/'>Ir a comprar</Link>
    </div>
  )
}

export default CartEmpty
