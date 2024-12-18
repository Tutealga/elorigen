import Link from 'next/link'
import Card from './Card'

const Datos = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col items-center text-center gap-4 mx-auto py-8 px-4 max-w-7xl'>
        <h2 id='como-comprar' className='text-4xl font-bold'>Carniceria El Origen</h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>
<div className='w-full rounded-lg bg-white shadow-[0_1px_1px_0_rgb(0,0,0,0.1)] flex flex-col items-center justify-start gap-4 p-8'>
      <div className='flex flex-col items-center justify-center'>
        <strong>LOCALES</strong>
      </div>
      <p className='text-[#4d4d4d]'>
      <strong className="font-bold">San Isidro</strong><br/>
      Juan José Díaz 935
        </p>
    </div>
<div className='w-full rounded-lg bg-white shadow-[0_1px_1px_0_rgb(0,0,0,0.1)] flex flex-col items-center justify-start gap-4 p-8'>
      <div className='flex flex-col items-center justify-center'>
        <strong>TELEFONO</strong>
      </div>
      <Link href="tel:+5401126841364" className='text-[#4d4d4d]'>
      <strong className="font-bold">San Isidro</strong><br/>
      (+54) 011 2684-1364
        </Link>
    </div>
    <div className='w-full rounded-lg bg-white shadow-[0_1px_1px_0_rgb(0,0,0,0.1)] flex flex-col items-center justify-start gap-4 p-8'>
      <div className='flex flex-col items-center justify-center'>
        <strong>HORARIOS</strong>
      </div>
      <p className='text-[#4d4d4d]'>
      <strong className="font-bold">Lunes a Sabados</strong>
      <br/>
      9:30-20:00
      <br/>
      <strong className="font-bold">Domingos y Feriados</strong>
      <br/>
      10:00-12:30
        </p>
    </div>
        </div>
      </div>
    </div>
  )
}

export default Datos