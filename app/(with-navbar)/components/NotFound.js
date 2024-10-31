import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const NotFound = () => {
  return (
    <section className='w-full flex flex-col gap-4 items-center min-h-screen'>
      <FontAwesomeIcon className='w-[7rem] mt-32' icon={faFaceFrown} />
      <h1 className='text-3xl sm:text-5xl font-bold text-center'>404 Página no encontrada</h1>
      <p>La página que estás buscando no existe.</p>
      <Link href='/' className='text-white bg-red-600 p-4 rounded-full'>Volver al inicio</Link>
    </section>
  )
}

export default NotFound
