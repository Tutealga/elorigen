'use client'

import useHandleFilter from '@/hooks/HandleFilter'

const Sort = () => {
    const { handleFilter } = useHandleFilter()

  return (
    <select onChange={(event) => handleFilter(event.target.value, 's')}>
        <option value='lowest' name='lowest'>Precio más bajo</option>
        <option value='highest' name='highest'>Precio más alto</option>
      </select>
  )
}

export default Sort