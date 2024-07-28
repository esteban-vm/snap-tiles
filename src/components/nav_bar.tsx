import type { ReactNode } from 'react'
import Link from 'next/link'
import { FaImage } from 'react-icons/fa6'

export default function NavBar({ children }: { children: ReactNode }) {
  return (
    <nav className='navbar sticky top-0 z-10 gap-2 bg-neutral shadow-lg'>
      <Link className='btn btn-outline btn-success text-lg' href='/'>
        <FaImage />
        <span className='hidden uppercase md:inline'>Snap Tiles</span>
      </Link>
      {children}
    </nav>
  )
}
