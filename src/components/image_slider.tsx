'use client'

import type { SlideImage } from 'yet-another-react-lightbox'
import { FaChevronLeft, FaChevronRight, FaXmark } from 'react-icons/fa6'
import { Lightbox } from 'yet-another-react-lightbox'
import { useSliderContext } from '@/contexts'
import { clsx } from '@/utils'

export default function ImageSlider(props: { slides: SlideImage[] }) {
  const { currentIndex, hide, isOpen } = useSliderContext()
  const iconClasses = clsx('transition-all ~size-5/7 active:scale-90 hover:opacity-70')

  return (
    <Lightbox
      close={hide}
      controller={{ aria: true, closeOnBackdropClick: true }}
      index={currentIndex}
      open={isOpen}
      styles={{ button: { padding: 0 } }}
      render={{
        iconClose: () => <FaXmark className={clsx(iconClasses, 'text-secondary')} />,
        iconNext: () => <FaChevronRight className={clsx(iconClasses, 'text-primary')} />,
        iconPrev: () => <FaChevronLeft className={clsx(iconClasses, 'text-primary')} />,
      }}
      {...props}
    />
  )
}
