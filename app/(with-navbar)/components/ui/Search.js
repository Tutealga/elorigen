'use client'

import useHandleFilter from '@/hooks/HandleFilter'

const Search = () => {
  const { handleFilter } = useHandleFilter()

  const handleSearch = (formData) => {
    handleFilter(formData, '/search')
  }

  return (
    <form className='flex' onSubmit={handleSearch}>
      <input className='rounded-l-full px-2' type='search' placeholder='Buscar' name='search' />
      <div className='px-2 py-1 border rounded-r-full flex items-center justify-center'>
        <button type='submit'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='14' height='14'>
            <path fill='#ffffff' d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
          </svg>
        </button>
      </div>
    </form>
  )
}

export default Search
