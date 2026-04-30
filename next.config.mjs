/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Enable Next.js Image Optimization for better Core Web Vitals
    // Remote images from ceremonyverse.com are allowed
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ceremonyverse.com',
      },
    ],
  },
}

export default nextConfig
