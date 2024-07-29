'use client'

import type { SlideImage } from 'yet-another-react-lightbox'
import { useState } from 'react'
import { Lightbox } from 'yet-another-react-lightbox'

export default function ImageSlider(props: { slides: SlideImage[] }) {
  const [isOpen, setIsOpen] = useState(false)
  return <Lightbox close={() => setIsOpen(false)} open={isOpen} {...props} />
}
