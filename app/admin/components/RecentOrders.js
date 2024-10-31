import Link from 'next/link'
import { getOrders } from '@/utils/getOrders'
import { localePrice } from '@/utils/LocalePrice'

const RecentOrders = async () => {
  const sales = await getOrders({ order: 'desc' })

  return (
    sales.map(res =>
      <Link key={res.id} href={`/admin/sales/${res.id}`}>
        <div className='grid grid-cols-3 items-center w-full bg-slate-100 justify-between h-auto rounded-md p-2'>
          <div className='flex flex-col jusify-self-start'>
            <p className='font-bold'>{localePrice(res.total)}</p>
            <p className='text-xs'>{res.buyer.name}</p>
          </div>
          <p className={`${res.status === 'Procesando' ? 'bg-blue-900' : res.status === 'Completado' ? 'bg-green-900' : 'bg-red-900'} text-white text-xs rounded-md p-1 justify-self-center`}>{res.status}</p>
          <p className='text-sm items-end justify-self-end'>{new Date(res.date).toLocaleString('es-AR', { year: 'numeric', month: 'numeric', day: 'numeric' })}</p>
        </div>
      </Link>
    )
  )
}

export default RecentOrders
