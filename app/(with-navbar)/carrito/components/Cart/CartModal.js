'use client'

import { Fragment, useState } from 'react'
import { useCartContext } from '@/context/CartContext'
import CartWidget from './CartWidget'
import { Dialog, Transition } from '@headlessui/react'
import CloseCart from './CloseCart'
import ItemCart from '../ItemCart'
import { ENVIO } from '@/consts/consts.js'
import Link from 'next/link'
import { localePrice } from '@/utils/LocalePrice'

export default function CartModal () {
  const { cart, totalPrice } = useCartContext()
  const [isOpen, setIsOpen] = useState(false)
  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  return (
    <>
      <button aria-label='Open cart' onClick={openCart}>
        <CartWidget />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className='relative z-50'>
          <Transition.Child
            as={Fragment}
            enter='transition-all ease-in-out duration-300'
            enterFrom='opacity-0 backdrop-blur-none'
            enterTo='opacity-100 backdrop-blur-[.5px]'
            leave='transition-all ease-in-out duration-200'
            leaveFrom='opacity-100 backdrop-blur-[.5px]'
            leaveTo='opacity-0 backdrop-blur-none'
          >
            <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition-all ease-in-out duration-300'
            enterFrom='translate-x-full'
            enterTo='translate-x-0'
            leave='transition-all ease-in-out duration-200'
            leaveFrom='translate-x-0'
            leaveTo='translate-x-full'
          >
            <Dialog.Panel className='fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l p-6 backdrop-blur-xl border-neutral-700 bg-black/80 text-white md:w-[390px]'>
              <div className='flex items-center justify-between'>
                <p className='text-lg font-semibold'>Carrito</p>

                <button aria-label='Close cart' onClick={closeCart}>
                  <CloseCart />
                </button>
              </div>

              {!cart || cart.length === 0
                ? (
                  <div className='mt-20 flex w-full flex-col items-center justify-center overflow-hidden'>
                    <i className='fa-solid fa-cart-shopping text-3xl' />
                    <p className='mt-6 text-center text-2xl font-bold'>Tu carrito esa vacio.</p>
                  </div>
                  )
                : (
                  <div className='flex h-full flex-col justify-between overflow-hidden p-1'>
                    <ul className='flex-grow overflow-auto py-4'>
                      {cart.map(item => <ItemCart key={item.id} product={item} />)}
                    </ul>

                    <div className='py-4 text-sm text-neutral-400'>
                      <div className='mb-3 flex items-center justify-between border-b pb-1 pt-1 border-neutral-700'>
                        <p>Subtotal</p>
                        <p>{localePrice(totalPrice())}</p>
                      </div>
                      <div className='mb-3 flex items-center justify-between border-b pb-1 pt-1 border-neutral-700'>
                        <p>Envio</p>
                        <p>{localePrice(ENVIO)}</p>
                      </div>
                      <div className='mb-3 flex items-center justify-between border-b pb-1 pt-1 border-neutral-700'>
                        <p>Total</p>
                        <p>{localePrice((totalPrice() + ENVIO))}</p>
                      </div>
                    </div>
                    <Link
                      href='/finalizar-compra'
                      className='block w-full rounded-full bg-red-900 p-3 text-center text-sm font-medium text-white opacity-90 hover:opacity-100'
                      onClick={closeCart}
                    >
                      Finalizar compra
                    </Link>
                  </div>
                  )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  )
}
