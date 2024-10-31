import { collection, getDocs, where, query, orderBy } from 'firebase/firestore'
import { db } from '@/firebase/config'

export const getOrders = async ({ startDate, endDate, order }) => {
  const ref = collection(db, 'orders')

  const set = (res) => res.docs.map(res => ({ id: res.id, ...res.data() }))

  if (!startDate && !endDate) {
    const refFilter = query(ref, orderBy('date', order))
    const res = await getDocs(refFilter)
    return set(res)
  } else {
    const refDateFilter = query(ref, where('date', '>=', startDate), where('date', '<=', endDate))
    const res = await getDocs(refDateFilter)
    return set(res)
  }
}
