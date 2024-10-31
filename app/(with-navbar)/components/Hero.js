import Link from 'next/link'

const Hero = () => {
  return (
    <section className='h-screen bg-center bg-cover' style={{ backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/elorigen-98119.appspot.com/o/pexels-valeria-boltneva-1639563-1-scaled.jpg.webp?alt=media&token=1bd76923-882c-445e-bf8a-4c97b927c63d")' }}>
      <div className='flex flex-col justify-center h-full gap-4 max-w-7xl mx-auto px-4'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center sm:text-left'>Cortes de carne premium a domicilio</h1>
        <p className='text-white lg:text-base text-sm text-center sm:text-left'>Pedi carne de la mejor calidad a la puerta de tu casa a través de nuestra web o directamente por WhatsApp</p>
        <div className='flex gap-4 sm:flex-row flex-wrap justify-center sm:justify-start'>
          <Link
            href='#más-vendidos'
            className='bg-red-900 text-white rounded-full p-4'
          >
            <span>Comprar online</span>
          </Link>
          <Link
            href='https://wa.me/5491126841364?text=Hola%21+Me+gustar%C3%ADa+realizar+un+pedido.'
            className='bg-green-500 text-white rounded-full flex gap-1 p-4'
          >
            <span className='flex gap-2 justify-center items-center'>
              <p>Pedir directo</p><i className='fa-brands fa-whatsapp color-white' />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
