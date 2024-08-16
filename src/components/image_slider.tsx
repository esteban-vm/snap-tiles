'use client'

import * as Icons from 'react-icons/lu'
import { Lightbox } from 'yet-another-react-lightbox'
import { Download, Fullscreen, Slideshow, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins'
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
      plugins={[Download, Fullscreen, Slideshow, Thumbnails, Zoom]}
      slides={slides}
      slideshow={{ delay: 4_000 }}
      thumbnails={{ showToggle: true, vignette: false }}
      zoom={{ maxZoomPixelRatio: 2 }}
      render={{
        iconNext: () => <Icons.LuStepForward className='size-7 text-accent' />,
        iconPrev: () => <Icons.LuStepBack className='size-7 text-accent' />,
        iconError: () => <Icons.LuImageOff className='size-8 text-error' />,
        iconDownload: () => <Icons.LuDownload />,
        iconClose: () => <Icons.LuX />,
        iconZoomIn: () => <Icons.LuZoomIn className='disabled:opacity-70' />,
        iconZoomOut: () => <Icons.LuZoomOut className='disabled:opacity-70' />,
        iconEnterFullscreen: () => <Icons.LuExpand />,
        iconExitFullscreen: () => <Icons.LuShrink />,
        iconSlideshowPlay: () => <Icons.LuPlay />,
        iconSlideshowPause: () => <Icons.LuPause />,
        iconLoading: () => <Loader size='3rem' />,
      }}
    />
  )
}
