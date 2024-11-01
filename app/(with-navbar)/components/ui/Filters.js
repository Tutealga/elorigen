'use client'

import useHandleFilter from '@/hooks/HandleFilter'
import Sort from './Sort'

const Filters = ({ filters }) => {
  const { active, handleFilter } = useHandleFilter()

  return (
    <div className='flex items-center w-full px-4 flex-col md:flex-row'>
      <ul className='flex w-full gap-2 justify-start sm:justify-center overflow-x-scroll no-scrollbar'>
        {filters.map(link => (
          <button
            key={link}
            onClick={() => handleFilter(link, 'tags')}
            className={`${
              active === link
            ? 'text-white bg-opacity-100'
: 'bg-opacity-40'
        } whitespace-nowrap rounded-full p-2 capitalize border-red-600 border hover:bg-red-600 hover:text-white bg-red-600`}
          >
            {link}
          </button>
        ))}
      </ul>
      <Sort />
    </div>

  )
}

export default Filters
