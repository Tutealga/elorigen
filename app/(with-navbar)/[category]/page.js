import Filters from '@/app/(with-navbar)/components/ui/Filters'
import NotFound from '@/app/(with-navbar)/components/NotFound'
import { categories } from '@/consts/consts'
import { CategoryTitle } from '@/utils/CategoryTitle'
import Products from '../components/Products'

const ProductCategory = async ({ params, searchParams }) => {
  const { category } = params
  const { tags, q, s } = searchParams
  const data = await CategoryTitle({ category })

  return (
    <div className='flex flex-col items-center max-w-7xl mx-auto mt-24 gap-4 py-4'>
      {
          categories.includes(category)
            ? <>
              <h1 className='font-bold text-4xl text-center'>{data.title}</h1>
              {data.filters ? <Filters filters={data.filters} /> : null}
              <Products params={category} tagsParams={tags} search={q} sort={s} />
              </>
            : <NotFound />
          }
    </div>
  )
}

export default ProductCategory
