import Image from 'next/image'
import { localePrice } from '@/utils/LocalePrice'
import ItemCount from '@/app/(with-navbar)/components/Item/ItemCount'

const ItemDetail = ({ item }) => {
  return (
    <div className='mx-auto max-w-7xl py-4 mt-24'>
      <div className='grid grid-cols-1 sm:grid-cols-2 rounded-lg border border-neutral-200 bg-white pb-3 sm:p-0'>
        <div className='w-full h-full'>
          <div className='relative aspect-square h-full max-h-[550px] w-full overflow-hidden'>
            <Image src={item.img} className='h-full object-cover rounded-lg w-full' fill sizes='(min-width: 1024px) 66vw, 100vw' priority alt={item.name} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-2'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>{item.name}</h1>
          <p>{localePrice(item.price)} /kg</p>
          <ItemCount product={item} />
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
