import { ImageCard, ImageContainer, ImageSlider, NavBar, SearchBox } from '@/components'
import { Api, Image } from '@/utils'

export default async function Home() {
  const images = await Api.getImages()
  const slides = await Api.getSlides(images)

  const imageCards = await Promise.all(
    images.map(async (image, index) => (
      <ImageCard
        key={image.id}
        index={index + 1}
        placeholder={await Image.getPlaceholder(image.webformatURL)}
        {...image}
      />
    ))
  )

  return (
    <main>
      <NavBar>
        <SearchBox />
      </NavBar>
      <ImageContainer>{imageCards}</ImageContainer>
      <ImageSlider slides={slides} />
    </main>
  )
}
