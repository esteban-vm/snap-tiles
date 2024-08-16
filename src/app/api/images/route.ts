import type { ApiResponse, ImageData } from '@/types'
import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'
import { API_KEY, API_URL } from '@/constants'
import { getPlaceholderImage } from '@/utils'

const config: CreateAxiosDefaults = {
  baseURL: API_URL,
  params: {
    key: API_KEY,
    safesearch: true,
    orientation: 'horizontal',
  },
}

const api = axios.create(config)

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const query = url.searchParams.get('query')

    const response = await api.get<ApiResponse>('/api/', {
      params: { q: query ? query : undefined },
    })

    const images = await Promise.all(
      response.data.hits.map(async (image): Promise<ImageData> => {
        const placeholder = await getPlaceholderImage(image.webformatURL)
        return { ...image, placeholder }
      })
    )

    return Response.json(images, { status: 200 })
  } catch (error) {
    return Response.json(error, { status: 500 })
  }
}
