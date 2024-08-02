import { Suspense } from 'react'
import { ImageCard, ImageContainer, ImageSlider, NavBar, SearchBox } from '@/components'
import { SliderContextProvider } from '@/contexts'
import { Api, getPlaceholderImage } from '@/utils'

export default async function Home({ searchParams }: { searchParams?: { query?: string } }) {
  const query = searchParams?.query

  const images = await Api.getImages(query)
  const slides = await Api.getSlides(images)

  const cards = await Promise.all(
    images.map(async (image, index) => {
      const placeholder = await getPlaceholderImage(image.webformatURL)
      return <ImageCard key={image.id} index={index} placeholder={placeholder} {...image} />
    })
  )

  return (
    <main>
      <NavBar>
        <Suspense fallback={null}>
          <SearchBox />
        </Suspense>
      </NavBar>
      <Suspense key={query} fallback={null}>
        {cards.length > 0 ? (
          <ImageContainer>
            <SliderContextProvider>
              {cards}
              <ImageSlider slides={slides} />
            </SliderContextProvider>
          </ImageContainer>
        ) : null}
      </Suspense>
    </main>
  )
}
