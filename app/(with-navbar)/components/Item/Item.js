'use client'

import Link from 'next/link'
import { localePrice } from '@/utils/LocalePrice'
import { useState } from 'react'
import { useCartContext } from '@/context/CartContext'
import { useToast } from '@/components/ui/use-toast'

const Item = ({ product }) => {
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
    <article className={`${product.discount !== '0%' ? 'border border-red-600' : ''} flex flex-col items-center gap-2 lg:w-full bg-white rounded-lg w-[250px] place-self-center`}>
      <Link className='flex-col flex items-center' href={`/${product.category}/${product.id}`}>
        <div className='flex items-center relative'>
          <img className='rounded-t-lg' src={product.img} height={162} width={243} alt={product.name} />
          <span className={`${product.discount !== '0%' ? 'absolute bg-red-600 top-0 left-0 p-1 text-xs text-white rounded-tl-lg' : 'hidden'}`}>{product.discount} OFF</span>
        </div>
        <h3 className='font-bold sm:text-lg md:text-xl text-center pt-4 text-base'>{product.name}</h3>
        <div className="flex flex-col items-center justify-center relative w-full opacity-80">
          {
          product.discount !== '0%' 
          ?
          <p className='md:text-lg sm:text-base text-sm line-through'>
          {localePrice(product.pricediscount)}
          {product.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
          </p>
        :
        null  
        }
        {
          product.discount !== '0%'
          ?
          <>
          {
            counter === 1 
            ?

            <p className={`${(counter > 1 && product.pricetwo > 0) ? 'line-through' : ''} md:text-lg sm:text-base text-sm`}>
          {localePrice(product.price)}
          {product.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
          </p>
          :
          <p className={`${(counter === 1 || product.pricetwo === 0) ? 'opacity-0' : 'opacity-100'} md:text-lg sm:text-base text-sm text-red-600 font-bold`}>
          {localePrice(product.pricetwo)}
          {product.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
          </p>}
          </>     
          :
          <>
          <p className={`${(counter > 1 && product.pricetwo > 0) ? 'line-through' : ''} md:text-lg sm:text-base text-sm`}>
          {localePrice(product.price)}
          {product.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
          </p>
          <p className={`${(counter === 1 || product.pricetwo === 0) ? 'opacity-0' : 'opacity-100'} md:text-lg sm:text-base text-sm text-red-600 font-bold`}>
          {localePrice(product.pricetwo)}
          {product.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
          </p>
          </> 
          }
        </div>
        <p className='opacity-80 md:text-sm text-xs'>{product.unidad}</p>
        <p className='opacity-80 md:text-sm text-xs'>Compra mínima: 1 un</p>
      </Link>
      <div className='pb-4'>
       <div className='mx-auto w-full justify-center gap-2 grid'>
      <div className='items-stretch flex flex-wrap relative'>
        <button type='button' className='bg-[#f2f3f8] border-transparent relative cursor-pointer py-1 px-2 rounded-l-full' onClick={remove}>-</button>
        <span className='flex rounded-none font-bold bg-[#f2f3f8] text-[#212529] justify-center items-center text-base flex-1 relative w-[1%]'>{counter}</span>
        <button type='button' className='bg-[#f2f3f8] border-transparent relative cursor-pointer py-1 px-2 rounded-r-full' onClick={add}>+</button>
      </div>
      <button onClick={() => onAdd(counter)} className='text-red-900 font-bold py-1 px-4 rounded-full border-red-900 border-2 hover:bg-red-900 hover:text-white'>Agregar</button>
    </div>
      </div>
    </article>
  )
}

export default Item
