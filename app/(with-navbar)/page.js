import Hero from '@/app/(with-navbar)/components/Hero.js'
import FilteredProducts from './components/FilteredProducts'
import HowToBuyContainer from './components/HowToBuyContainer'
import Link from 'next/link'

const Home = () => {
  return (
    <>
      <Hero />
      <div className='p-4 flex flex-col w-full justify-center gap-2'>
        <h2 className='text-[2rem] font-bold text-center'>Buscar por preparación</h2>
        <div className='flex items-center justify-start sm:justify-center gap-8 text-center font-bold text-black/70 overflow-x-scroll no-scrollbar'>
          <Link className='flex flex-col gap-2 justify-center items-center' href='/carnes-para-parrilla'>
            <img src='https://www.svgrepo.com/show/282278/grill.svg' className='border border-1 p-1 rounded-md w-16 h-16 self-center' />
            <h3>Parrilla</h3>
          </Link>
          <Link className='flex flex-col gap-2 justify-center items-center' href='/carnes-para-horno'>
            <img src='https://www.svgrepo.com/show/490886/oven.svg' className='border border-1 p-1 rounded-md w-16 h-16 self-center' />
            <h3>Horno</h3>
          </Link>
          <Link className='flex flex-col gap-2 justify-center items-center' href='/carnes-para-plancha'>
            <img src='https://www.svgrepo.com/show/9974/round-grill.svg' className='border border-1 p-1 rounded-md w-16 h-16 self-center' />
            <h3>Plancha</h3>
          </Link>
          <Link className='flex flex-col gap-2 justify-center items-center' href='/carnes-para-cacerola'>
            <img src='https://www.svgrepo.com/show/103111/pan.svg' className='border border-1 p-1 rounded-md w-16 h-16 self-center' />
            <h3>Cacerola</h3>
          </Link>
          <Link className='flex flex-col gap-2 justify-center items-center' href='/carnes-para-milanesas'>
            <img src='https://www.svgrepo.com/show/287626/meat-food-and-restaurant.svg' className='border border-1 p-1 rounded-md w-16 h-16 self-center' />
            <h3>Milanesas</h3>
          </Link>
          <Link className='flex flex-col gap-2 justify-center items-center' href='/carnes-para-churrascos'>
            <img src='https://www.svgrepo.com/show/128183/meat-steak.svg' className='border border-1 p-1 rounded-md w-16 h-16 self-center' />
            <h3>Churrascos</h3>
          </Link>
        </div>
      </div>
      <FilteredProducts tagsParams='más-vendidos' />
      <FilteredProducts tagsParams='más-baratos' />
      <HowToBuyContainer />
    </>
  )
}

export default Home
