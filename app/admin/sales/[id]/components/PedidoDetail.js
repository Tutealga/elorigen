import { localePrice } from '@/utils/LocalePrice'
import UpdateOrderStatus from './UpdateOrderStatus'

const PedidoDetail = ({ item }) => {
  return (
    <div className='p-4 container'>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl'>Detalle del pedido <span className='font-bold'>{item.id}</span></h2>
          <div className='grid grid-cols-4 gap-8'>
            <UpdateOrderStatus item={item} />
            <div className='flex flex-col gap-2'>
              <h6 className='font-bold text-l'>Facturacion</h6>
              <div className='flex flex-col gap-1'>
                <p>{item.buyer.name}</p>
                <p>{item.buyer.direction}</p>
                <p>{item.buyer.localidad}</p>
                <p>{item.buyer.cp}</p>
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='font-bold text-l'>Telefono</h6>
              <p>{item.buyer.phone}</p>
            </div>
            <div className='flex flex-col gap-2'>
              <h6 className='font-bold text-l'>Dia de entrega</h6>
              <p>{item.buyer.deliveryDate}</p>
              <h6 className='font-bold text-l'>Franja horaria</h6>
              <p>{item.buyer.deliveryTime}</p>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-4'>
          <div className='w-full rounded-md p-2 border gap-2 flex flex-col'>
      {...item.items.map(item =>
        <div key={item.title} className='grid grid-cols-4 items-center w-full bg-slate-100 justify-between rounded-md p-2'>
          <p className='text-sm'>{item.title}</p>
          <p className='text-sm'>{localePrice(item.price)}</p>
          <p className='text-sm'>x{item.quantity}</p>
          <p className='text-sm'>{localePrice((item.price * item.quantity))}</p>
        </div>
      )}
          </div>
          <p className='place-self-end border-b-red-900 border-b-2'>Total: <span className='font-bold'>{localePrice(item.total)}</span></p>
        </div>
      </div>
    </div>
  )
}

export default PedidoDetail
