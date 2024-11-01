'use client'

import { filtersUrlQuery } from '@/utils/index'
import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'

const useHandleFilter = () => {
  const [active, setActive] = useState('')
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleFilter = (link, key) => {
    let newUrl = ''

    if(key === 'tags'){
          if (link === active){
            setActive('')

            newUrl = filtersUrlQuery({
              params: searchParams.toString(),
              key,
              value: null
            })
          }else {
            setActive(link)

            newUrl = filtersUrlQuery({
              params: searchParams.toString(),
              key,
              value: link
            })
          } 
    } else {
      newUrl = filtersUrlQuery({
        params: searchParams.toString(),
        key,
        value: link
      })
    }

    router.push(newUrl, { scroll: false })
  }

  return {
    handleFilter,
    active
  }
}

export default useHandleFilter
