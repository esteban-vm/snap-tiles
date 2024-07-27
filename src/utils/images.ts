'use server'

import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'

function bufferToBase64(buffer: Buffer) {
  return `data:image/png;base64,${buffer.toString('base64')}`
}

async function getFileBufferLocal(filepath: string) {
  const realFilepath = path.join(process.cwd(), 'public', filepath)
  return await fs.readFile(realFilepath)
}

async function getFileBufferRemote(url: string) {
  const response = await fetch(url)
  return Buffer.from(await response.arrayBuffer())
}

function getFileBuffer(src: string) {
  const isRemote = src.startsWith('http')
  return isRemote ? getFileBufferRemote(src) : getFileBufferLocal(src)
}

/**
 * @see {@link https://dev.to/dpnunez/nextjs-image-loading-with-blur-effect-a-step-by-step-guide-4f64 | Next.js Image Loading with Blur Effect: A Step-by-Step Guide}
 */
export async function getPlaceholderImage(filepath: string) {
  let placeholderImage: string

  try {
    const originalBuffer = await getFileBuffer(filepath)
    const resizedBuffer = await sharp(originalBuffer).resize(20).toBuffer()
    placeholderImage = bufferToBase64(resizedBuffer)
  } catch {
    placeholderImage = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOsa2yqBwAFCAICLICSyQAAAABJRU5ErkJggg==`
  }

  return placeholderImage
}
