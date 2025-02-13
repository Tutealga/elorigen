import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { useCartContext } from '@/context/CartContext'
import { db } from '@/firebase/config'
import { useRouter } from 'next/navigation'
import { localePrice } from '@/utils/LocalePrice'

export const useCreate = (initialData) => {
  const { order, clear } = useCartContext()
  const [data, setData] = useState(initialData)

  const router = useRouter()

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.stopPropagation()
    } else {
      checkout()
    }
  }

  const text =
  'Hola! Me gustaría realizar el siguiente pedido: \n'
    .concat(order.items.reduce((message, item) => message.concat(`* ${item.title} - x${item.quantity} - ${(item.quantity > 1 && item.pricetwo > 0) ? `~${localePrice(item.price)}/kg~ ${localePrice(item.pricetwo)}` : localePrice(item.price)}/kg\n`), ''))
    .concat(`\nPara ${data.direction}, ${data.localidad}.`)
    .concat(`\nEl ${data.deliveryDate}`)
    .concat(`\n\nNota adicional: ${data.nota}`)

  const checkout = () => {
    const docRef = collection(db, 'orders')
    addDoc(docRef, { buyer: data, ...order, date: Date.now(), status: 'Procesando' })
    router.push(`https://wa.me/5491126841364?text=${encodeURIComponent(text)}`)
    clear()
  }

  const inputsValue = (e) => {
    const { name, value } = e.target
    setData({ ...data, [name]: value })
  }

  return { data, inputsValue, handleSubmit }
}
