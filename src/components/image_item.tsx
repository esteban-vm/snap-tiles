import Image from 'next/image'

interface ImageItemProps extends AppTypes.ImageData {
  index: number
}

export default function ImageItem({ index, id, likes, tags, type, views, webformatURL }: ImageItemProps) {
  return (
    <div key={id} className='card h-96 w-auto bg-base-100 shadow-xl'>
      <figure className='h-1/2 overflow-hidden'>
        <Image
          alt={tags}
          className='object-cover object-center contrast-125 transition-all duration-500 hover:scale-125'
          height={640}
          src={webformatURL}
          width={640}
        />
      </figure>

      <div className='card-body h-1/2'>
        <h2 className='card-title'>
          {index + 1}
          <div className='badge badge-secondary'>{type}</div>
        </h2>

        <p>{tags}</p>

        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>Views: {views}</div>
          <div className='badge badge-outline'>Likes: {likes}</div>
        </div>
      </div>
    </div>
  )
}
