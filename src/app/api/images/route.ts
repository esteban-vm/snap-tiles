import type { ApiResponse, ImageData } from '@/types'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { getPlaceholderImage } from '@/utils'

const apiConfig: AxiosRequestConfig = {
  baseURL: process.env.API_URL,
  timeout: 5_000,
  params: {
    key: process.env.API_KEY,
    orientation: 'horizontal',
    safesearch: true,
  },
}

const apiInstance = axios.create(apiConfig)

export async function GET(request: Request) {
  const url = new URL(request.url)
  const query = url.searchParams.get('query')

  const response = await apiInstance.get<ApiResponse>('/api/', {
    params: { q: query ? query : undefined },
  })

  const images = await Promise.all(
    response.data.hits.map(async (image): Promise<ImageData> => {
      const placeholder = await getPlaceholderImage(image.webformatURL)
      return { ...image, placeholder }
    })
  )

  return Response.json(images)
}
