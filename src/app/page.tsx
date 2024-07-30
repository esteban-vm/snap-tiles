import { ImageCard, ImageContainer, ImageSlider, NavBar, SearchBox } from '@/components'
import { SliderContextProvider } from '@/contexts'
import { Api, getPlaceholderImage } from '@/utils'

export default async function Home() {
  const images = await Api.getImages()
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
        <SearchBox />
      </NavBar>
      <ImageContainer>
        <SliderContextProvider>
          {cards}
          <ImageSlider slides={slides} />
        </SliderContextProvider>
      </ImageContainer>
    </main>
  )
}
