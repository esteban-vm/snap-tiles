'use client'

import * as Icons from 'react-icons/fa6'
import { Lightbox } from 'yet-another-react-lightbox'
import { Fullscreen, Slideshow, Thumbnails, Zoom } from 'yet-another-react-lightbox/plugins'
import { useSlidesContext } from '@/contexts'
import { Loader } from '@/shared'
import { clsx } from '@/utils'

export default function ImageSlider() {
  const { slides, currentIndex, hide, isOpen } = useSlidesContext()
  const iconClasses = clsx('transition-all active:scale-90 hover:opacity-70')

  return (
    <Lightbox
      close={hide}
      controller={{ aria: true }}
      index={currentIndex}
      open={isOpen}
      plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      slides={slides}
      slideshow={{ delay: 5_000 }}
      thumbnails={{ borderColor: 'oklch(var(--su))', border: 2, vignette: false }}
      zoom={{ maxZoomPixelRatio: 2 }}
      render={{
        iconNext: () => <Icons.FaChevronRight className={clsx(iconClasses, 'size-7 text-success')} />,
        iconPrev: () => <Icons.FaChevronLeft className={clsx(iconClasses, 'size-7 text-success')} />,
        iconClose: () => <Icons.FaRectangleXmark className={clsx(iconClasses, 'size-7 text-secondary')} />,
        iconZoomIn: () => <Icons.FaMagnifyingGlassPlus className={clsx(iconClasses, 'mr-2 size-6')} />,
        iconZoomOut: () => <Icons.FaMagnifyingGlassMinus className={clsx(iconClasses, 'mr-2 size-6')} />,
        iconEnterFullscreen: () => <Icons.FaMaximize className={clsx(iconClasses, 'mr-2 size-6 text-warning')} />,
        iconExitFullscreen: () => <Icons.FaMinimize className={clsx(iconClasses, 'mr-2 size-6 text-warning')} />,
        iconSlideshowPlay: () => <Icons.FaCirclePlay className={clsx(iconClasses, 'mr-2 size-6 text-info')} />,
        iconSlideshowPause: () => <Icons.FaCirclePause className={clsx(iconClasses, 'mr-2 size-6 text-info')} />,
        iconLoading: () => <Loader size='3rem' />,
      }}
    />
  )
}
