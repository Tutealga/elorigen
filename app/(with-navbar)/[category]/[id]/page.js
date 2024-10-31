import { getProducts } from '@/utils/getProducts'
import ItemDetail from './components/ItemDetail'
import NotFound from '../../components/NotFound'

const Post = async ({ params }) => {
  const { id } = params
  const item = await getProducts({ id })

  return (
    <>
      {
          item
            ? <ItemDetail key={item.id} item={item} />
            : <NotFound />
          }
    </>
  )
}

export default Post
