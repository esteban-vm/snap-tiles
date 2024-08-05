import { ImageCard, ImageGrid, ImageSlider } from '@/components'
import { SliderContextProvider } from '@/contexts'
import { Api, getPlaceholderImage } from '@/utils'

export default async function ImagesContainer({ query }: { query?: string }) {
  const images = await Api.getImages(query)
  const slides = await Api.getSlides(images)

  const cards = await Promise.all(
    images.map(async (image, index) => {
      const placeholder = await getPlaceholderImage(image.webformatURL)
      return <ImageCard key={image.id} index={index} placeholder={placeholder} {...image} />
    })
  )

  if (cards.length === 0) return null

  return (
    <ImageGrid>
      <SliderContextProvider>
        {cards}
        <ImageSlider slides={slides} />
      </SliderContextProvider>
    </ImageGrid>
  )
}
