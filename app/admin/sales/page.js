import { getOrders } from '@/utils/getOrders'
import { localePrice } from '@/utils/LocalePrice'
import Link from 'next/link'

const SalesPage = async () => {
  const sales = await getOrders({ order: 'desc' })

  return (
    <div className='p-4'>
      <h1 className='flex font-bold text-4xl mb-4'>Pedidos</h1>
      <div className='grid grid-cols-6 items-center w-full justify-between h-auto p-2'>
        <p className='font-semibold text-left'>Pedido</p>
        <p className='font-semibold text-left'>Fecha</p>
        <p className='font-semibold text-left'>Estado</p>
        <p className='font-semibold text-left'>Facturacion</p>
        <p className='font-semibold text-left'>Total</p>
        <p className='font-semibold text-left'>Dia de entrega</p>
      </div>
      {sales.map(res =>
        <Link key={res.id} href={`/admin/sales/${res.id}`}>
          <div className='grid grid-cols-6 items-center w-full bg-slate-100 justify-between h-auto rounded-md p-2'>
            <p className='text-sm'>{res.buyer.name}</p>
            <p className='text-sm'>{new Date(res.date).toLocaleString('es-AR', { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
            <p className={`${res.status === 'Procesando' ? 'bg-blue-900' : res.status === 'Completado' ? 'bg-green-900' : 'bg-red-900'} text-white text-xs rounded-md p-1 justify-self-start`}>{res.status}</p>
            <p className='text-sm'>{res.buyer.direction}<br />{res.buyer.localidad}</p>
            <p className='font-bold'>{localePrice(res.total)}</p>
            <p className='text-sm'>{res.buyer.deliveryDate}<br />{res.buyer.deliveryTime}</p>
          </div>
        </Link>
      )}
    </div>

  )
}
export default SalesPage
