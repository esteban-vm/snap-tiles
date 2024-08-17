import { ImageResponse } from 'next/og'
import { AppIcon } from '@/shared'

export const contentType = 'image/png'

export const size = {
  width: 64,
  height: 64,
}

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#00935F',
        }}
      >
        <AppIcon />
      </div>
    ),
    { ...size }
  )
}
