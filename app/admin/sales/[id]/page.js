import { getOrderById } from '@/utils/getOrderById'
import PedidoDetail from './components/PedidoDetail'

const Detalle = async ({ params }) => {
  const { id } = params
  const pedido = await getOrderById({ id })

  if (!pedido.buyer) return <p>Not found</p>

  return <PedidoDetail key={pedido.id} item={pedido} />
}

export default Detalle
