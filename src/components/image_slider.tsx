'use client'

import * as Icons from 'react-icons/fa6'
import { Lightbox } from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import { useSlidesContext } from '@/contexts'
import { clsx } from '@/utils'

export default function ImageSlider() {
  const { slides, currentIndex, hide, isOpen } = useSlidesContext()
  const iconClasses = clsx('size-7 transition-all active:scale-90 hover:opacity-70')

  return (
    <Lightbox
      close={hide}
      controller={{ aria: true, closeOnBackdropClick: true }}
      index={currentIndex}
      open={isOpen}
      plugins={[Zoom]}
      slides={slides}
      zoom={{ maxZoomPixelRatio: 2 }}
      render={{
        iconClose: () => <Icons.FaXmark className={clsx(iconClasses, 'text-secondary')} />,
        iconNext: () => <Icons.FaChevronRight className={clsx(iconClasses, 'text-success')} />,
        iconPrev: () => <Icons.FaChevronLeft className={clsx(iconClasses, 'text-success')} />,
        iconZoomIn: () => <Icons.FaMagnifyingGlassPlus className={clsx(iconClasses, 'size-6')} />,
        iconZoomOut: () => <Icons.FaMagnifyingGlassMinus className={clsx(iconClasses, 'mx-2 size-6')} />,
      }}
    />
  )
}
