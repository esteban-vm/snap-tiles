import { Images, Navigation } from '@/containers'
import { ImagesContextProvider } from '@/contexts'

export default async function Home({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query

  return (
    <ImagesContextProvider query={query}>
      <Navigation />
      <Images />
    </ImagesContextProvider>
  )
}
