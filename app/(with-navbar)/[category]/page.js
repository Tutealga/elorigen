import Filters from '@/app/(with-navbar)/components/ui/Filters'
import NotFound from '@/app/(with-navbar)/components/NotFound'
import { categories, categoriesTags } from '@/consts/consts'
import { CategoryTitle } from '@/utils/CategoryTitle'
import Products from '../components/Products'
import Sort from '../components/ui/Sort'

const ProductCategory = async ({ params, searchParams }) => {
  const { category } = params
  const { tags, s } = searchParams
  const data = await CategoryTitle({ category })

if(!Object.keys(categories).includes(category) && !Object.keys(categoriesTags).includes(category)) return <NotFound />

const findCategory = (category) => {
   if(Object.keys(categoriesTags).includes(category)) {
     return categoriesTags[category]
   } else {
    return categories[category]
   }

}

return (
    <div className='flex flex-col items-center max-w-7xl mx-auto mt-24 gap-4 py-4'>
              <h1 className='font-bold text-4xl text-center'>{data.title}</h1>
              {data.filters ? <Filters filters={data.filters} /> : <Sort />}
                <Products params={findCategory(category)} tagsParams={tags} sort={s} />
    </div>
  )
  
}

export default ProductCategory
