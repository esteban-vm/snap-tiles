import type { ReactNode } from 'react'
import Link from 'next/link'

export default function NavBar({ children }: { children: ReactNode }) {
  return (
    <nav className='navbar sticky top-0 z-10 bg-neutral shadow-lg'>
      <Link className='btn btn-ghost mr-2 text-xl' href='/'>
        Snap Tiles
      </Link>
      {children}
    </nav>
  )
}
