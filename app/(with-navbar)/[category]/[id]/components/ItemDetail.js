'use client'

import { localePrice } from '@/utils/LocalePrice'
import { useState } from 'react'
import { useCartContext } from '@/context/CartContext'
import { useToast } from '@/components/ui/use-toast'

const ItemDetail = ({ item }) => {
  const [counter, setCounter] = useState(1)
  const { addItem } = useCartContext()
  const { toast } = useToast()

  const onAdd = (quantity) => {
    addItem(item, quantity)
    toast({
      title: 'itemo añadido',
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
    <div className='mx-auto max-w-7xl py-4 mt-24'>
      <div className='grid grid-cols-1 sm:grid-cols-2 rounded-lg border border-neutral-200 bg-white pb-3 sm:p-0'>
        <div className='w-full h-full'>
          <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden'>
            <img src={item.img} className='h-full object-cover rounded-lg w-full' fill sizes='(min-width: 1024px) 66vw, 100vw' priority alt={item.name} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>{item.name}</h1>
          <div className='flex-col flex items-center'>
        <div className="flex flex-col items-center justify-center relative w-full opacity-80">
          {
          item.discount !== '0%' 
          ?
          <p className='md:text-lg sm:text-base text-sm line-through'>
          {localePrice(item.pricediscount)}
          {item.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
          </p>
        :
        null  
        }
        {
          item.discount !== '0%'
          ?
          <>
          {
            counter === 1 
            ?

            <p className={`${(counter > 1 && item.pricetwo > 0) ? 'line-through' : ''} md:text-lg sm:text-base text-sm`}>
          {localePrice(item.price)}
          {item.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
          </p>
          :
          <p className={`${(counter === 1 || item.pricetwo === 0) ? 'opacity-0' : 'opacity-100'} md:text-lg sm:text-base text-sm text-red-600 font-bold`}>
          {localePrice(item.pricetwo)}
          {item.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
          </p>}
          </>     
          :
          <>
          <p className={`${(counter > 1 && item.pricetwo > 0) ? 'line-through' : ''} md:text-lg sm:text-base text-sm`}>
          {localePrice(item.price)}
          {item.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
          </p>
          <p className={`${(counter === 1 || item.pricetwo === 0) ? 'opacity-0' : 'opacity-100'} md:text-lg sm:text-base text-sm text-red-600 font-bold`}>
          {localePrice(item.pricetwo)}
          {item.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
          </p>
          </> 
          }
        </div>
        <p className='opacity-80 md:text-sm text-xs'>{item.unidad}</p>
        <p className='opacity-80 md:text-sm text-xs'>Compra mínima: 1 un</p>
      </div>
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
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
