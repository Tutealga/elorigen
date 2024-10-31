'use client'

import { filtersUrlQuery } from '@/utils/index'
import { useSearchParams, useRouter } from 'next/navigation'

const useHandleFilter = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleFilter = (link, key) => {
    let newUrl = ''

      newUrl = filtersUrlQuery({
        params: searchParams.toString(),
        key,
        value: link
      })
  
    router.push(newUrl, { scroll: false })
  }

  return {
    handleFilter
  }
}

export default useHandleFilter
