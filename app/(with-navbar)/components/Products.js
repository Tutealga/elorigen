import Item from './Item/Item'
import { getProducts } from '@/utils/getProducts'

const Products = async ({ params, tagsParams, search, sort }) => {
  const products = await getProducts({ params, tagsParams, search, sort })

  if (products.length === 0) return <span>No hay resultados para esta búsqueda.</span>

  return (
    <article className='w-full gap-2 grid md:grid-cols-3 lg:grid-cols-5 grid-cols-1 sm:grid-cols-2 items-center overflow-x-scroll p-4 no-scrollbar'>
      {
        products.map(product => <Item key={product.id} product={product} />)
    }
    </article>
  )
}

export default Products
