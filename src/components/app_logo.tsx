import Link from 'next/link'
import { AppIcon } from '@/shared'

export default function AppLogo() {
  return (
    <Link className='btn btn-outline btn-success text-lg' href='/'>
      <AppIcon />
      <span className='hidden uppercase md:inline'>Snap Tiles</span>
    </Link>
  )
}
