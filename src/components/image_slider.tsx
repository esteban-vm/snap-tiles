'use client'

import type { SlideImage } from 'yet-another-react-lightbox'
import { Lightbox } from 'yet-another-react-lightbox'
import { useSliderContext } from '@/contexts'

export default function ImageSlider(props: { slides: SlideImage[] }) {
  const { currentIndex, hide, isOpen } = useSliderContext()

  return (
    <Lightbox
      close={hide}
      controller={{ aria: true, closeOnBackdropClick: true }}
      index={currentIndex}
      open={isOpen}
      {...props}
    />
  )
}
