'use client'

import type { Slide } from 'yet-another-react-lightbox'
import { useState } from 'react'
import { Lightbox } from 'yet-another-react-lightbox'

export default function ImageSlider({ slides }: { slides: Slide[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return <Lightbox close={() => setIsOpen(false)} open={isOpen} slides={slides} />
}
