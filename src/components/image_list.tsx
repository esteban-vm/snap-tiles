import type { ReactNode } from 'react'

export default function ImageList({ children }: { children: ReactNode }) {
  return (
    <div className='grid w-full grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>{children}</div>
  )
}
