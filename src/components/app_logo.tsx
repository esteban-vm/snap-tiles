import Link from 'next/link'
import { FaImage } from 'react-icons/fa6'

export default function AppLogo() {
  return (
    <Link className='btn btn-outline btn-success text-lg' href='/'>
      <FaImage />
      <span className='hidden uppercase md:inline'>Snap Tiles</span>
    </Link>
  )
}
