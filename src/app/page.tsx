import { ImageItem, ImageList, ImageSlider, NavBar, SearchBox } from '@/components'
import { api } from '@/utils'

export default async function Home() {
  const images = await api.getImages()
  const slides = await api.getSlides(images)

  return (
    <main>
      <NavBar>
        <SearchBox />
      </NavBar>
      <ImageList>
        {images.map((item, index) => (
          <ImageItem key={item.id} index={index + 1} {...item} />
        ))}
      </ImageList>
      <ImageSlider slides={slides} />
    </main>
  )
}
