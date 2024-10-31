import Link from 'next/link'
import ItemCount from './ItemCount'
import Image from 'next/image'
import { localePrice } from '@/utils/LocalePrice'

const Item = ({ product }) => {
  return (
    <article className={`${product.discount == 1 ? 'border border-red-600' : ''} flex flex-col items-center gap-2 lg:w-full bg-white rounded-lg w-[250px] place-self-center`}>
      <Link className='flex-col flex items-center' href={`/${product.category}/${product.id}`}>
        <div className='flex items-center relative'>
          <Image className='rounded-t-lg' src={product.img} height={162} width={243} alt={product.name} />
          <span className={`${product.discount == 1 ? 'absolute bg-red-600 top-0 left-0 p-1 text-xs text-white rounded-tl-lg' : 'hidden'}`}>Oferta</span>
        </div>
        <h3 className='font-bold sm:text-lg md:text-xl text-center pt-4 text-base'>{product.name}</h3>
        <p className='md:text-lg sm:text-base text-sm'>{localePrice(product.price)}{product.category === 'almacen' ? <span>/un</span> : <span>/kg</span>}</p>
        <p className='opacity-80 md:text-base sm:text-sm text-xs'>{product.unidad}</p>
      </Link>
      <div className='pb-4'>
        <ItemCount product={product} />
      </div>
    </article>
  )
}

export default Item
