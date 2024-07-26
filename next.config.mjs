/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pixabay.com',
        pathname: '/get/*',
      },
    ],
  },
  experimental: {
    typedRoutes: true,
  },
}

export default nextConfig
