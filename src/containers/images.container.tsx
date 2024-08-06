'use client'

import { ImageCard, ImageGrid, ImageSlider, LoadingSpinner } from '@/components'
import { SlidesContextProvider, useImagesContext } from '@/contexts'

export default function Images() {
  const { images, isLoading } = useImagesContext()

  if (isLoading) return <LoadingSpinner />

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
