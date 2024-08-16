'use client'

import { useEffect, useState } from 'react'
import { LuArrowBigUpDash } from 'react-icons/lu'
import { clsx } from '@/utils'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <button
      title='Back to top'
      type='button'
      className={clsx(
        'btn btn-circle fixed bottom-0 right-1/2 !translate-x-1/2 md:right-0 md:!translate-x-0',
        isVisible ? 'inline-flex' : 'hidden'
      )}
      onClick={scrollToTop}
    >
      <LuArrowBigUpDash className='size-6 fill-none stroke-current text-accent' />
    </button>
  )
}
