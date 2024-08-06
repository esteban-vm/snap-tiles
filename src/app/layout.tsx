import '@/styles/globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import { clsx } from '@/utils'

export const metadata: Metadata = {
  title: 'Snap Tiles',
  description: 'Image searcher made with Next.js',
  authors: { name: 'Esteban V.M.', url: 'https://github.com/esteban-vm' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <main className={clsx('relative min-h-screen w-full', redditSans.variable)}>{children}</main>
      </body>
    </html>
  )
}

const redditSans = localFont({
  variable: '--font-reddit-sans',
  display: 'swap',
  fallback: ['sans-serif'],
  src: [
    { path: '../../public/fonts/RedditSans-Regular.woff2', style: 'normal' },
    { path: '../../public/fonts/RedditSans-Italic.woff2', style: 'italic' },
  ],
})
