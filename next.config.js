/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {

  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ["react", ...config.externals];
    }

    config.resolve.alias["react"] = path.resolve(__dirname, ".", "node_modules",  "react");

    return config;
  },

  images: {
    domains: ['paid4x.com'],
  },

  optimizeFonts: false,
  reactStrictMode: true,
  optimizeFonts: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  
  images: {
    domains: ['paid4x.com'],
    unoptimized: true
  },
  env: {
    BASE_API_URL: process.env.BASE_API_URL ? process.env.BASE_API_URL :'https://torktest.vercel.app/api'
  },
  publicRuntimeConfig: {
    BASE_API_URL: process.env.BASE_API_URL ? process.env.BASE_API_URL : 'https://torktest.vercel.app/api'
  },

}

module.exports = nextConfig

 