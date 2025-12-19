/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Production optimizations
  poweredByHeader: false,
  compress: true,
  reactStrictMode: true,
}

module.exports = nextConfig
