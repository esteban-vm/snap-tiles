import { Suspense } from 'react'
import { LoadingSpinner } from '@/components'
import { ImagesContainer } from '@/containers'

export default async function Home({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query

  return (
    <Suspense key={query} fallback={<LoadingSpinner />}>
      <ImagesContainer query={query} />
    </Suspense>
  )
}
