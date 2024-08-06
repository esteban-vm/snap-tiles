'use client'

import type { Route } from 'next'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useId } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import { useDebouncedCallback } from 'use-debounce'
import { useImagesContext } from '@/contexts'

export default function SearchBox() {
  const id = useId()
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const { isLoading } = useImagesContext()

  const handleSearch = useDebouncedCallback((input: string) => {
    const params = new URLSearchParams(searchParams)

    if (input.trim()) {
      params.set('query', input)
    } else {
      params.delete('query')
    }

    router.replace(`${pathname}?${params.toString()}` as Route)
  }, 500)

  return (
    <div className='form-control flex-1'>
      <label className='input input-bordered flex w-full items-center' htmlFor={id}>
        <input
          autoComplete='off'
          className='peer w-full placeholder:italic placeholder:opacity-70'
          defaultValue={searchParams.get('query')?.toString()}
          disabled={isLoading}
          id={id}
          maxLength={100}
          placeholder='Search…'
          type='search'
          onChange={(event) => handleSearch(event.target.value)}
        />
        <FaMagnifyingGlass className='hidden fill-current opacity-50 peer-placeholder-shown:inline' />
      </label>
    </div>
  )
}
