'use client'

import type { ImageData } from '@/types'
import Image from 'next/image'
import { FaEye, FaHeart } from 'react-icons/fa6'
import { useSlidesContext } from '@/contexts'

interface ImageCardProps extends ImageData {
  index: number
  placeholder: string
}

export default function ImageCard({
  index,
  placeholder,
  id,
  likes,
  tags,
  type,
  views,
  webformatURL,
  webformatHeight,
  webformatWidth,
}: ImageCardProps) {
  const { show } = useSlidesContext()

  return (
    <div className='group card h-96 w-auto border border-base-200 bg-base-100 shadow-xl'>
      <figure className='h-1/2 cursor-pointer select-none overflow-hidden'>
        <Image
          alt={tags}
          blurDataURL={placeholder}
          className='h-full object-cover object-center contrast-125 transition-all duration-500 group-hover:motion-safe:scale-125'
          height={webformatHeight}
          id={id.toString()}
          placeholder='blur'
          src={webformatURL}
          width={webformatWidth}
          onClick={() => show(index)}
        />
      </figure>
      <div className='card-body h-1/2'>
        <h2 className='card-title'>
          <div className='tooltip tooltip-primary' data-tip='Image number'>
            <span className='badge badge-primary px-4 py-3 uppercase'>Nº {index + 1}</span>
          </div>
          <div className='tooltip tooltip-secondary' data-tip='Image type'>
            <span className='badge badge-secondary px-4 py-3 uppercase'>{type}</span>
          </div>
        </h2>
        <p className='capitalize'>{tags}</p>
        <div className='card-actions justify-end'>
          <div className='tooltip' data-tip='Views'>
            <span className='badge badge-info badge-outline gap-2 px-4 py-3'>
              <FaEye className='text-primary' />
              {views}
            </span>
          </div>
          <div className='tooltip' data-tip='Likes'>
            <span className='badge badge-info badge-outline gap-2 px-4 py-3'>
              <FaHeart className='text-secondary' />
              {likes}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
