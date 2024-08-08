import type { ImageData } from '@/types'
import type { ReactNode } from 'react'
import type { SlideImage } from 'yet-another-react-lightbox'
import { cache, createContext, useContext, useEffect, useState } from 'react'

const SlidesContext = createContext<SlidesContextImpl>(null!)

export function SlidesContextProvider({ images, ...rest }: SlidesContextProps) {
  const [slides, setSlides] = useState<SlideImage[]>([])
  const [currentIndex, setCurrentIndex] = useState(-1)

  useEffect(() => {
    const getSlides = cache(() => {
      return images.reduce<SlideImage[]>((slides, image) => {
        slides.push({
          alt: image.tags,
          src: image.largeImageURL,
          height: image.imageHeight,
          width: image.imageWidth,
          thumbnail: image.previewURL,
        })

        return slides
      }, [])
    })

    setSlides(getSlides())
  }, [images])

  const value: SlidesContextImpl = {
    slides,
    currentIndex,
    hide: () => setCurrentIndex(-1),
    show: setCurrentIndex,
    isOpen: currentIndex >= 0,
  }

  return <SlidesContext.Provider value={value} {...rest} />
}

export const useSlidesContext = () => useContext(SlidesContext)

interface SlidesContextImpl {
  slides: SlideImage[]
  currentIndex: number
  hide: () => void
  show: (index: number) => void
  isOpen: boolean
}

interface SlidesContextProps {
  images: ImageData[]
  children: ReactNode
}
