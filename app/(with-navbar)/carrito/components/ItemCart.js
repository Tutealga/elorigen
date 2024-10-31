import { useCartContext } from '@/context/CartContext'
import { localePrice } from '@/utils/LocalePrice'
import Image from 'next/image'

const ItemCart = ({ product }) => {
  const { removeItem, restProduct, sumProduct } = useCartContext()

  return (
    <li className='flex w-full flex-col border-b border-neutral-700'>
      <div className='relative flex w-full flex-row justify-between px-1 py-4'>
        <div className='absolute z-40 -mt-1 ml-[50px]'>
          <button className='flex h-[17px] w-[17px] items-center justify-center rounded-full bg-red-900' onClick={() => removeItem(product.id)}><i className='fa-solid fa-xmark mx-[1px] h-4 w-4 text-white' /></button>
        </div>
        <div className='relative h-16 w-16 cursor-pointer overflow-hidden rounded-full border border-neutral-700 bg-neutral-900 hover:bg-neutral-800'>
          <Image
            className='h-full w-full object-cover'
            width={64}
            height={64}
            alt={product.name}
            src={product.img}
          />
        </div>
        <div className='flex flex-1 flex-col text-base ml-4'>
          <span className='leading-tight'>
            {product.name}
          </span>
          <p className='text-sm opacity-60 flex gap-1'>
            <span className={`${(product.quantity > 1 && product.pricetwo > 0) ? 'line-through' : ''}`}>
              {localePrice(product.price)}
              {product.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
            </span>
            <span className={`${(product.quantity === 1 || product.pricetwo === 0) ? 'hidden' : 'block'} text-red-600 font-bold`}>
              {localePrice(product.pricetwo)}
              {product.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}
            </span>
          </p>
          <span className='text-xs opacity-60'>
            {product.unidad}
          </span>
        </div>
        <div className='flex h-16 flex-col justify-between'>
          <p className='flex justify-end space-y-2 text-right text-sm'>{localePrice(((((product.quantity > 1 && product.pricetwo > 0) ? product.pricetwo : product.price) * product.prom) * product.quantity))}{product.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}</p>
          <div className='ml-auto flex flex-row items-center rounded-full bg-[#f2f3f8]'>
            <button disabled={product.quantity <= 1} type='btn' className='text-black bg-[#f8f9fa] border-[#f8f9fa] hover:bg-[#d3d4d5] hover:border-[#c6c7c8] px-3 py-1 rounded-l-full' onClick={() => restProduct(product.id)}>-</button>
            <p className='text-center'>
              <span className='w-full text-sm text-black'>{product.quantity}</span>
            </p>
            <button disabled={product.stock <= product.quantity} type='btn' className='disabled:bg-[#f8f9fa] disabled:border-[#f8f9fa] disabled:text-black disabled:opacity-60 text-black bg-[#f8f9fa] border-[#f8f9fa] hover:bg-[#d3d4d5] hover:border-[#c6c7c8] px-3 py-1 rounded-r-full' onClick={() => sumProduct(product.id)}>+</button>
          </div>
        </div>
      </div>
    </li>
  )
}

export default ItemCart
