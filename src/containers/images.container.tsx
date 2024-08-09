'use client'

import { FaFaceSadTear } from 'react-icons/fa6'
import { ImageCard, ImageGrid, ImageSlider } from '@/components'
import { SlidesContextProvider, useImagesContext } from '@/contexts'
import { Loader } from '@/shared'

export default function Images() {
  const { images, isError, isLoading } = useImagesContext()

  if (isLoading) {
    return <Loader cssOverride={{ marginTop: '1.75rem' }} size='4.5rem' />
  }

  if (isError) {
    return (
      <h2 style={{ marginTop: '1.75rem', fontSize: '1.5rem' }}>
        Something went wrong <FaFaceSadTear style={{ display: 'inline' }} />
      </h2>
    )
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
