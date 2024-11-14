import '@fortawesome/fontawesome-free/css/all.min.css'
import { useCartContext } from '@/context/CartContext'

const CartWidget = () => {
  const { totalProducts } = useCartContext()

  return (
    <div className='relative flex md:h-11 md:w-11 items-center justify-center rounded-full border transition-colors border-neutral-700 text-white'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='20' height='20'>
        <path fill='#ffffff' d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
      </svg>
      <div className='absolute text-center right-0 top-0 -mr-2 -mt-2 md:-mr-1 md:-mt-1 h-4 w-4 rounded-full bg-red-900 text-[11px] font-medium text-white'>{totalProducts()}</div>
    </div>
  )
}

export default CartWidget
