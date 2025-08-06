/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    domains: ['localhost', '*.azurewebsites.net', '*.blob.core.windows.net'],
  },
}

module.exports = nextConfig
