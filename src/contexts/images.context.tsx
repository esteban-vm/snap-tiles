import type { ImageData } from '@/types'
import type { ReactNode } from 'react'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { NEXT_PUBLIC_API_URL } from '@/constants'

const ImagesContext = createContext<ImagesContextImpl>(null!)

export function ImagesContextProvider({ query, ...rest }: ImagesContextProps) {
  const [images, setImages] = useState<ImageData[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true)

        const response = await axios.get<ImageData[]>('/api/images', {
          baseURL: NEXT_PUBLIC_API_URL,
          params: { query },
        })

        setImages(response.data)
      } catch {
        setImages([])
      } finally {
        setIsLoading(false)
      }
    }

    getImages()
  }, [query])

  const value: ImagesContextImpl = {
    images,
    isLoading,
  }

  return <ImagesContext.Provider value={value} {...rest} />
}

export const useImagesContext = () => useContext(ImagesContext)

interface ImagesContextImpl {
  images: ImageData[]
  isLoading: boolean
}

interface ImagesContextProps {
  query?: string
  children: ReactNode
}
