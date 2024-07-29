import type { AxiosRequestConfig } from 'axios'
import type { Slide } from 'yet-another-react-lightbox'
import axios from 'axios'
import { unstable_cache } from 'next/cache'

const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.API_URL,
  params: {
    key: process.env.API_KEY,
    orientation: 'horizontal',
    safesearch: true,
  },
}

const apiInstance = axios.create(apiConfig)

export async function getImages() {
  try {
    const { data } = await apiInstance.get<AppTypes.ApiResponse>('/')
    return data.hits
  } catch {
    return []
  }
}

export const getSlides = unstable_cache(
  async (images: AppTypes.ImageData[]) => {
    const slides = images.reduce<Slide[]>((previousValue, currentValue) => {
      previousValue.push({
        src: currentValue.largeImageURL,
        height: currentValue.imageHeight,
        width: currentValue.imageWidth,
      })

      return previousValue
    }, [])

    return slides
  },
  ['slides']
)
