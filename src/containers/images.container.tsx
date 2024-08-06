'use client'

import { ImageCard, ImageGrid, ImageSlider } from '@/components'
import { SlidesContextProvider, useImagesContext } from '@/contexts'
import { LoadingSpinner } from '@/shared'

export default function Images() {
  const { images, isLoading } = useImagesContext()

  if (isLoading) {
    return <LoadingSpinner className='loading-lg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' />
  }

  return (
    <ImageGrid>
      <SlidesContextProvider images={images}>
        {images.map((image, index) => (
          <ImageCard key={image.id} index={index} {...image} />
        ))}
        <ImageSlider />
      </SlidesContextProvider>
    </ImageGrid>
  )
}
