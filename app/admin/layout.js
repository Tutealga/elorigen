'use client'

import Link from 'next/link'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth } from '@/firebase/config'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const AdminLayout = ({ children }) => {
  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if (!user) {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
        .then(result => setUser({ name: result.user.displayName, email: result.user.email }))
    }

    if (user && user.email !== process.env.NEXT_PUBLIC_ALLOWED_USERS) router.push('/')
  }, [user])

  if (user && user.email === process.env.NEXT_PUBLIC_ALLOWED_USERS) {
    return (
      <div className='grid grid-cols-1 md:grid-cols-12 min-h-screen'>
        <aside className='md:col-span-2 md:h-full md:w-full p-4 bg-[#171e26]'>
          <div className='flex flex-col gap-4 container'>
            <Link className='text-white gap-4 flex items-center' href='/'><i className='fa-solid fa-house' />Inicio</Link>
            <Link className='text-white gap-4 flex items-center' href='/admin'><i className='fa-solid fa-chart-simple' />Dashboard</Link>
            <Link className='text-white gap-4 flex items-center' href='/admin/sales'><i className='fa-solid fa-receipt' />Pedidos</Link>
          </div>
        </aside>
        <main className='p-4 flex flex-col gap-4 md:col-span-10 w-full'>
          {children}
        </main>
      </div>
    )
  }
}

export default AdminLayout
