/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/consultation',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/sourcing-disclaimer',
        destination: '/contact',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
