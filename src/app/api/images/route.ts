import type { ApiResponse, ImageData } from '@/types'
import type { AxiosRequestConfig } from 'axios'
import axios from 'axios'
import { API_KEY, API_URL } from '@/constants'
import { getPlaceholderImage } from '@/utils'

const apiConfig: AxiosRequestConfig = {
  baseURL: API_URL,
  timeout: 5_000,
  params: {
    key: API_KEY,
    orientation: 'horizontal',
    safesearch: true,
  },
}

const apiInstance = axios.create(apiConfig)

export async function GET(request: Request) {
  // await new Promise((resolve) => setTimeout(resolve, 30_000))

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