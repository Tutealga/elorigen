'use client'

import ItemCart from '@/app/(with-navbar)/carrito/components/ItemCart'
import { useCartContext } from '@/context/CartContext'
import CartEmpty from './CartEmpty'
import Link from 'next/link'
import { ENVIO } from '@/consts/consts.js'
import { localePrice } from '@/utils/LocalePrice'

const CartDetail = () => {
  const { cart, totalPrice } = useCartContext()

  return (
    <>
      {
  cart.length !== 0
    ? <div className='flex flex-col gap-4 max-w-sm w-full'>
      <div className='table-auto border-collapse w-full mx-auto'>
        <div>
          {cart.map(product => <ItemCart key={product.id} product={product} />)}
        </div>
      </div>
      <div className='flex justify-between'>
        <p>Subtotal:</p>
        <p>{localePrice(totalPrice())}</p>
      </div>
      <div className='flex justify-between'>
        <p>Envio:</p>
        <p>{localePrice(ENVIO)}</p>
      </div>
      <div className='flex justify-between'>
        <p>Total:</p>
        <p>{localePrice(totalPrice() + ENVIO)}</p>
      </div>
      <Link className='bg-red-900 text-white p-4 rounded-full mx-auto' href='/finalizar-compra'>Finalizar compra</Link>
      </div>
    : <CartEmpty />
}
    </>
  )
}

export default CartDetail
