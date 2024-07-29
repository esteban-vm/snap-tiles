'use client'

import type { SlideImage } from 'yet-another-react-lightbox'
import { useState } from 'react'
import { Lightbox } from 'yet-another-react-lightbox'

export default function ImageSlider({ slides }: { slides: SlideImage[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return <Lightbox close={() => setIsOpen(false)} open={isOpen} slides={slides} />
}
