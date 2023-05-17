/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['upload.wikimedia.org','uhdtv.io','mango.blender.org','download.blender.org','cdn.cinematerial.com'],
  },
}

module.exports = nextConfig
