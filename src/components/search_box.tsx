'use client'

import { useId } from 'react'
import { FaMagnifyingGlass } from 'react-icons/fa6'

export default function SearchBox() {
  const id = useId()

  return (
    <form className='form-control flex-1' onSubmit={(event) => event.preventDefault()}>
      <label className='input input-bordered flex w-full items-center' htmlFor={id}>
        <input
          className='peer w-full placeholder:italic placeholder:opacity-70'
          id={id}
          placeholder='Search…'
          type='search'
        />
        <FaMagnifyingGlass className='hidden fill-current opacity-50 peer-placeholder-shown:inline' />
      </label>
    </form>
  )
}
