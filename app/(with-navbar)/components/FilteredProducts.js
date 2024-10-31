import Item from './Item/Item'
import { getProducts } from '@/utils/getProducts'

const FilteredProducts = async ({ params, tagsParams }) => {
  const products = await getProducts({ params, tagsParams })

  const subTitle = tagsParams.split('-').join(' ')

  return (
    <section id={tagsParams} className='w-full flex flex-col mx-auto gap-2 py-8 max-w-7xl px-4'>
      <h3 className='lg:text-3xl text-1xl font-bold'>{subTitle.charAt(0).toUpperCase() + subTitle.slice(1)}</h3>
      <div className='w-full gap-2 grid grid-cols-[repeat(5,1fr)] overflow-x-scroll'>
        {
        products.map(product => <Item key={product.id} product={product} />)
    }
      </div>
    </section>
  )
}

export default FilteredProducts
