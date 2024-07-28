import type { Slide } from 'yet-another-react-lightbox'
import axios from 'axios'
import { unstable_cache } from 'next/cache'
import { ImageItem, ImageList, ImageSlider, NavBar, SearchBox } from '@/components'

export default async function Home() {
  const images = await getImageList()
  const slides = await cachedList(images)

  return (
    <main>
      <NavBar>
        <SearchBox />
      </NavBar>
      <ImageList>{images.map((item, index) => <ImageItem key={item.id} index={index + 1} {...item} />)}</ImageList>
      <ImageSlider slides={slides} />
    </main>
  )
}

const getImageList = async () => {
  try {
    const { API_KEY, API_URL } = process.env

    const { data } = await axios.get<AppTypes.ApiResponse>(API_URL, {
      params: { key: API_KEY, orientation: 'horizontal', safesearch: true },
    })

    return data.hits
  } catch {
    return []
  }
}

const toSlideList = async (images: AppTypes.ImageData[]) => {
  const slides = images.reduce<Slide[]>((acc, curr) => {
    acc.push({
      src: curr.largeImageURL,
      height: curr.imageHeight,
      width: curr.imageWidth,
    })

    return acc
  }, [])

  return slides
}

const cachedList = unstable_cache(toSlideList, ['slides'])
