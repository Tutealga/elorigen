/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bicifan.uy'
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com'
      }

    ]
  }
}

module.exports = nextConfig
