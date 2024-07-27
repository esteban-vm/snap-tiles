import Image from 'next/image'
import { FaEye, FaHeart } from 'react-icons/fa'
import { getPlaceholderImage } from '@/utils'

interface ImageItemProps extends AppTypes.ImageData {
  index: number
}

export default async function ImageItem({
  index,
  likes,
  tags,
  type,
  views,
  webformatURL,
  webformatHeight,
  webformatWidth,
}: ImageItemProps) {
  const placeholderImage = await getPlaceholderImage(webformatURL)

  return (
    <div className='card h-96 w-auto bg-base-100 shadow-xl'>
      <figure className='h-1/2 overflow-hidden'>
        <Image
          alt={tags}
          blurDataURL={placeholderImage}
          className='object-cover object-center contrast-125 transition-all duration-500 hover:scale-125'
          height={webformatHeight}
          placeholder='blur'
          src={webformatURL}
          width={webformatWidth}
        />
      </figure>
      <div className='card-body h-1/2'>
        <h2 className='card-title'>
          <span className='badge badge-primary' title='Result number'>
            Nº {index}
          </span>
          <span className='badge badge-secondary' title='Type'>
            {type}
          </span>
        </h2>
        <p>{tags}</p>
        <div className='card-actions justify-end'>
          <span className='badge badge-outline px-4 py-3' title='Views'>
            <FaEye className='text-blue-500' />
            &nbsp;
            {views}
          </span>
          <span className='badge badge-outline px-4 py-3' title='Likes'>
            <FaHeart className='text-red-500' />
            &nbsp;
            {likes}
          </span>
        </div>
      </div>
    </div>
  )
}
