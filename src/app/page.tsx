import { ImageCard, ImageContainer, ImageSlider, NavBar, SearchBox } from '@/components'
import { Api, Images } from '@/utils'

export default async function Home() {
  const images = await Api.getImages()
  const slides = await Api.getSlides(images)

  const cards = await Promise.all(
    images.map(async (image, index) => {
      const placeholder = await Images.getPlaceholder(image.webformatURL)
      return <ImageCard key={image.id} index={index + 1} placeholder={placeholder} {...image} />
    })
  )

  return (
    <main>
      <NavBar>
        <SearchBox />
      </NavBar>
      <ImageContainer>{cards}</ImageContainer>
      <ImageSlider slides={slides} />
    </main>
  )
}
