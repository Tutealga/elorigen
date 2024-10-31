import { db } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore'

export const getOrderById = async ({ id }) => {
  const ref = doc(db, 'orders', id)
  const set = res => ({ id: res.id, ...res.data() })
  const res = await getDoc(ref)
  return set(res)
}
