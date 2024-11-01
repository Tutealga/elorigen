'use client'

import { useEffect, useState } from 'react'
import useHandleFilter from '@/hooks/HandleFilter'

const Sort = () => {
    const { handleFilter } = useHandleFilter()
    const [sort, setSort] = useState('lowest')
  
    useEffect(() => {
      handleFilter(sort, 's')
    }, [sort])

  return (
    <select onChange={(event) => setSort(event.target.value)}>
        <option value='lowest' name='lowest'>Precio más bajo</option>
        <option value='highest' name='highest'>Precio más alto</option>
      </select>
  )
}

export default Sort