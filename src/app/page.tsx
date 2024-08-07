import { NEXT_PUBLIC_API_URL } from '@/constants'
import { Images, Navigation } from '@/containers'
import { ImagesContextProvider } from '@/contexts'

export default async function Home({ searchParams }: { searchParams?: { query?: string } }) {
  if (!NEXT_PUBLIC_API_URL) return null

  const query = searchParams?.query

  return (
    <ImagesContextProvider query={query}>
      <Navigation />
      <Images />
    </ImagesContextProvider>
  )
}
