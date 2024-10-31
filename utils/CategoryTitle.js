import { db } from '@/firebase/config'
import { doc, getDoc } from 'firebase/firestore'

export const CategoryTitle = async ({ category }) => {
  const ref = doc(db, 'titles', category)
  const set = res => ({ id: res.id, ...res.data() })
  const res = await getDoc(ref)
  return set(res)
}
