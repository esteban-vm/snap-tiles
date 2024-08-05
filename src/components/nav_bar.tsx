import type { ReactNode } from 'react'

export default function NavBar(props: { children: ReactNode }) {
  return <nav className='navbar sticky top-0 z-10 gap-2 bg-neutral shadow-lg' {...props} />
}
