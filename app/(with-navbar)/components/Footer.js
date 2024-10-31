import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full bg-[#171e26] text-white py-8 gap-4'>
      <div className='grid grid-cols-2 sm:grid-cols-3 justify-between max-w-7xl mx-auto p-4 gap-8'>
        <section className='flex flex-col gap-4'>
          <h6 className='font-bold'>CARNES</h6>
          <ul className='flex flex-col gap-2'>
            <li><Link className='opacity-60 hover:opacity-100' href='/cortes-vacunos'>Vacunos</Link></li>
            <li><Link className='opacity-60 hover:opacity-100' href='/cortes-cerdo'>Cerdo</Link></li>
            <li><Link className='opacity-60 hover:opacity-100' href='/cortes-pollo'>Pollo</Link></li>
            <li><Link className='opacity-60 hover:opacity-100' href='/embutidos-y-achuras'>Embutidos y Achuras</Link></li>
            <li><Link className='opacity-60 hover:opacity-100' href='/preparados'>Preparados</Link></li>
            <li><Link className='opacity-60 hover:opacity-100' href='/almacen'>Almacén</Link></li>
          </ul>
        </section>
        <section className='flex flex-col gap-4'>
          <h6 className='font-bold'>LINKS ÚTILES</h6>
          <ul className='flex flex-col gap-2'>
            <li><Link className='opacity-60 hover:opacity-100' href='/'>Como Comprar</Link></li>
            <li><Link className='opacity-60 hover:opacity-100' href='/'>Zonas de Envio</Link></li>
            <li><Link className='opacity-60 hover:opacity-100' href='/'>Preguntas Frecuentes</Link></li>
            <ul className='flex gap-4'>
              <li><Link className='opacity-60 hover:opacity-100' target='__blank' href='https://www.facebook.com/elorigencarnes'><i className='fa-brands fa-facebook' /></Link></li>
              <li><Link className='opacity-60 hover:opacity-100' target='__blank' href='https://www.instagram.com/elorigencarnes/'><i className='fa-brands fa-instagram' /></Link></li>
            </ul>
          </ul>
        </section>
        <section className='flex flex-col gap-4'>
          <h6 className='font-bold'>OTROS</h6>
          <ul className='flex flex-col gap-2'>
            <li><Link className='opacity-60 hover:opacity-100' href='/'>Términos y Condiciones</Link></li>
            <li><Link className='opacity-60 hover:opacity-100' href='/'>Política de Privacidad</Link></li>
            <li><Link className='opacity-60 hover:opacity-100' href='/'>Política de cookies</Link></li>
          </ul>
        </section>
      </div>
      <section className='credits text-center opacity-60'>
        <p>El Origen © 2024. Todos los derechos reservados.</p>
      </section>
    </footer>
  )
}

export default Footer
