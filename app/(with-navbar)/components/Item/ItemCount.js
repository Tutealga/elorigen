'use client'

import { useState } from 'react'
import { useCartContext } from '@/context/CartContext'
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link'

const ItemCount = ({ product }) => {
  const [counter, setCounter] = useState(1)
  const { addItem } = useCartContext()
  const { toast } = useToast()

  const onAdd = (quantity) => {
    addItem(product, quantity)
    toast({
      title: 'Producto añadido',
      action: <Link href='/carrito'>Ir al carrito</Link>
    })
  }

  const add = () => {
    setCounter(counter + 1)
  }

  const remove = () => {
    (counter > 1) && setCounter(counter - 1)
  }

  return (
    <div className='mx-auto w-full justify-center gap-2 grid'>
      <div className='items-stretch flex flex-wrap relative'>
        <button type='button' className='bg-[#f2f3f8] border-transparent relative cursor-pointer py-1 px-2 rounded-l-full' onClick={remove}>-</button>
        <span className='flex rounded-none font-bold bg-[#f2f3f8] text-[#212529] justify-center items-center text-base flex-1 relative w-[1%]'>{counter}</span>
        <button type='button' className='bg-[#f2f3f8] border-transparent relative cursor-pointer py-1 px-2 rounded-r-full' onClick={add}>+</button>
      </div>
      <button onClick={() => onAdd(counter)} className='text-red-900 font-bold py-1 px-4 rounded-full border-red-900 border-2 hover:bg-red-900 hover:text-white'>Agregar</button>
    </div>
  )
}

export default ItemCount
