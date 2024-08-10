'use client'

import * as Icons from 'react-icons/lu'
import { Lightbox } from 'yet-another-react-lightbox'
import { Fullscreen, Slideshow, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins'
import { useSlidesContext } from '@/contexts'
import { Loader } from '@/shared'

export default function ImageSlider() {
  const { slides, currentIndex, hide, isOpen } = useSlidesContext()

  return (
    <Lightbox
      close={hide}
      controller={{ aria: true }}
      index={currentIndex}
      open={isOpen}
      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      slides={slides}
      slideshow={{ delay: 4_000 }}
      thumbnails={{ borderColor: 'oklch(var(--a))', vignette: false }}
      zoom={{ maxZoomPixelRatio: 2 }}
      render={{
        iconNext: () => <Icons.LuChevronRight className='size-7 text-accent' />,
        iconPrev: () => <Icons.LuChevronLeft className='size-7 text-accent' />,
        iconClose: () => <Icons.LuXCircle className='size-6 text-secondary' />,
        iconZoomIn: () => <Icons.LuZoomIn className='mr-2 size-6' />,
        iconZoomOut: () => <Icons.LuZoomOut className='mr-2 size-6' />,
        iconEnterFullscreen: () => <Icons.LuExpand className='mr-2 size-6 text-warning' />,
        iconExitFullscreen: () => <Icons.LuShrink className='mr-2 size-6 text-warning' />,
        iconSlideshowPlay: () => <Icons.LuPlayCircle className='mr-2 size-6 text-info' />,
        iconSlideshowPause: () => <Icons.LuPauseCircle className='mr-2 size-6 text-info' />,
        iconLoading: () => <Loader size='3rem' />,
      }}
    />
  )
}
