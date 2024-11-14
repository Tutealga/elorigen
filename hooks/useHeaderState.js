'use client'

import { useState } from 'react'

const useHeaderState = () => {
  const [isOpen, setIsOpen] = useState(false)
  const openMenu = () => setIsOpen(true)
  const closeMenu = () => setIsOpen(false)

  return { openMenu, closeMenu, isOpen }
}

export default useHeaderState
