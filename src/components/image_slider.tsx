'use client'

import type { SlideImage } from 'yet-another-react-lightbox'
import { FaChevronLeft, FaChevronRight, FaMagnifyingGlassMinus, FaMagnifyingGlassPlus, FaXmark } from 'react-icons/fa6'
import { Lightbox } from 'yet-another-react-lightbox'
import Zoom from 'yet-another-react-lightbox/plugins/zoom'
import { useSliderContext } from '@/contexts'
import { clsx } from '@/utils'

export default function ImageSlider(props: { slides: SlideImage[] }) {
  const { currentIndex, hide, isOpen } = useSliderContext()
  const iconClasses = clsx('size-7 transition-all active:scale-90 hover:opacity-70')

  return (
    <Lightbox
      close={hide}
      controller={{ aria: true, closeOnBackdropClick: true }}
      index={currentIndex}
      open={isOpen}
      plugins={[Zoom]}
      zoom={{ maxZoomPixelRatio: 2 }}
      render={{
        iconClose: () => <FaXmark className={clsx(iconClasses, 'text-secondary')} />,
        iconNext: () => <FaChevronRight className={clsx(iconClasses, 'text-success')} />,
        iconPrev: () => <FaChevronLeft className={clsx(iconClasses, 'text-success')} />,
        iconZoomIn: () => <FaMagnifyingGlassPlus className={clsx(iconClasses, 'size-6')} />,
        iconZoomOut: () => <FaMagnifyingGlassMinus className={clsx(iconClasses, 'mx-2 size-6')} />,
      }}
      {...props}
    />
  )
}
