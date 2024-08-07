'use client'

import { ImageCard, ImageGrid, ImageSlider } from '@/components'
import { SlidesContextProvider, useImagesContext } from '@/contexts'
import { Loader } from '@/shared'

export default function Images() {
  const { images, isLoading } = useImagesContext()

  if (isLoading) {
    return <Loader cssOverride={{ marginTop: '1.75rem' }} size='4.5rem' />
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
