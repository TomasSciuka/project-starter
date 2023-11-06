/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.STRAPI_URL]
  }
}

module.exports = nextConfig
