'use client'

import { useCartContext } from '@/context/CartContext'
import LabelInput from '@/app/(with-navbar)/components/ui/LabelInput'
import { useCreate } from '@/hooks/useCreate'
import CartEmpty from '@/app/(with-navbar)/carrito/components/Cart/CartEmpty'
import { ENVIO } from '@/consts/consts.js'
import { initialBuyer } from '@/consts/consts'
import ItemCart from '../../carrito/components/ItemCart'
import { localePrice } from '@/utils/LocalePrice'

const Checkout = () => {
  const { cart, totalPrice } = useCartContext()
  const { data, inputsValue, handleSubmit } = useCreate(initialBuyer)

  return (
    <div className='mt-24 py-4 gap-4 max-w-7xl mx-auto'>
      <h1 className='font-bold text-center text-3xl lg:text-5xl'>Finalizar compra</h1>
      {
      cart.length !== 0
        ? <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 p-4'>
          <form className='flex flex-col gap-4 lg:col-span-8 w-full mx-auto' onSubmit={handleSubmit}>
            <LabelInput label='Nombre y Apellido' name='name' required type='text' pattern='[A-Za-z,\s\u00f1\u00d1\u00C0-\u017F]{1,}' placeholder='Ej: Juan Pérez' change={inputsValue} value={data.name} />
            <div className='flex flex-col'>
              <div className='flex gap-1'>
                <label className='font-bold'>País</label>
                <span role='presentation' aria-hidden='true' class='text-[#FC8181] font-bold'>*</span>
              </div>
              <select className='rounded border p-2' required>
                <option>Argentina</option>
              </select>
            </div>
            <LabelInput label='Direccion de entrega' required name='direction' type='text' pattern='[0-9A-Za-z,.°\s\u00f1\u00d1\u00C0-\u017F]{1,}' placeholder='Ej: Juan Jose Diaz 935, Depto 2 B' change={inputsValue} value={data.direction} />
            <LabelInput label='Localidad / Ciudad' required placeholder='Ej: San Isidro' name='localidad' type='text' pattern='[A-Za-z\s,.\u00f1\u00d1\u00C0-\u017F]{1,}' change={inputsValue} value={data.localidad} />
            <div className='flex flex-col'>
              <div className='flex gap-1'>
                <label className='font-bold'>Provincia</label>
                <span role='presentation' aria-hidden='true' class='text-[#FC8181] font-bold'>*</span>
              </div>
              <select className='rounded border p-2' required>
                <option>Buenos Aires</option>
              </select>
            </div>
            <LabelInput label='Código postal' required name='cp' type='text' pattern='[0-9]{4}' placeholder='Ej: 1642' change={inputsValue} value={data.cp} />
            <LabelInput label='Teléfono' name='phone' required type='tel' pattern='[1]{2}[0-9]{4}[0-9]{4}' placeholder='Ej: 1145689634' change={inputsValue} value={data.phone} />
            <LabelInput label='Dia de entrega' required name='deliveryDate' type='date' change={inputsValue} value={data.deliveryDate} />
            <div className='flex flex-col'>
              <label>Notas del pedido (opcional)</label>
              <textarea name='nota' row='10' className='rounded border p-2' placeholder='Notas sobre tu pedido, por ejemplo, especificaciones para la entrega.' onChange={inputsValue} value={data.nota} />
            </div>
            <button className='rounded-full bg-red-900 text-white p-4 mx-auto' type='submit'>
              Realizar pedido
            </button>
          </form>
          <div className='lg:col-span-4 p-2'>
            <div>
              {cart.map(product => <ItemCart key={product.id} product={product} />)}
            </div>
            <div className='flex flex-col gap-2 py-2'>
              <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{localePrice(totalPrice())}</p>
              </div>
              <div className='flex justify-between'>
                <p>Envio</p>
                <p>{localePrice(ENVIO)}</p>
              </div>
              <div className='flex justify-between'>
                <p>Total</p>
                <p>{localePrice((totalPrice() + ENVIO))}</p>
              </div>
            </div>
          </div>
        </div>
        : <div className='flex flex-col items-center gap-4'>
          <CartEmpty />
          </div>
    }
    </div>
  )
}

export default Checkout
