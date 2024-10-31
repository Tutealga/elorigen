'use client'

import { doc, updateDoc } from 'firebase/firestore'
import { useState } from 'react'
import { db } from '@/firebase/config'

const states = ['Procesando', 'Completado', 'Cancelado']

const UpdateOrderStatus = ({ item }) => {
  const initialStatus = {
    status: item.status
  }

  const [status, setStatus] = useState(initialStatus)

  const handleSubmit = (e) => {
    const form = e.currentTarget
    if (form.checkValidity() === false || status === initialStatus) {
      e.preventDefault()
      e.stopPropagation()
    } else {
      updateDocument(e)
    }
  }

  const updateDocument = (e) => {
    e.preventDefault()
    const docRef = doc(db, 'orders', item.id)
    updateDoc(docRef, status)
  }

  const inputsValue = (e) => {
    const { name, value } = e.target
    setStatus({ ...status, [name]: value })
  }

  return (
    <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
      <div className='flex flex-col gap-2'>
        <label>Estado</label>
        <select name='status' className='rounded border p-2' onChange={inputsValue} value={status.status}>
          {states.map(state => <option key={state} value={state}>{state}</option>)}
        </select>
      </div>
      <button className='bg-red-900 text-white p-1 disabled:opacity-75 rounded-full' type='submit'>
        Actualizar
      </button>
    </form>
  )
}

export default UpdateOrderStatus
