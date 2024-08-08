import type { ImageData } from '@/types'
import type { ReactNode } from 'react'
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'
import { NEXT_PUBLIC_API_URL } from '@/constants'

const ImagesContext = createContext<ImagesContextImpl>(null!)

export function ImagesContextProvider({ query, ...rest }: ImagesContextProps) {
  const [images, setImages] = useState<ImageData[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true)

        const { data, status } = await axios.get<ImageData[]>('/api/images', {
          baseURL: NEXT_PUBLIC_API_URL,
          params: { query },
        })

        if (status >= 200 && status < 300) {
          setImages(data)
        }
      } catch {
        setImages([])
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getImages()
  }, [query])

  const value: ImagesContextImpl = {
    images,
    isLoading,
    isError,
  }

  return <ImagesContext.Provider value={value} {...rest} />
}

export const useImagesContext = () => useContext(ImagesContext)

interface ImagesContextImpl {
  images: ImageData[]
  isLoading: boolean
  isError: boolean
}

interface ImagesContextProps {
  query?: string
  children: ReactNode
}
