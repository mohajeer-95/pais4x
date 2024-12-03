/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  trailingSlash: true, // Set this if using `next export` with Apache or static hosting

  webpack: (config, options) => {
    if (options.isServer) {
      config.externals = ["react", ...config.externals];
    }

    config.resolve.alias["react"] = path.resolve(__dirname, ".", "node_modules", "react");

    return config;
  },

  images: {
    domains: ['paid4x.com'],
    unoptimized: true, // Necessary if deploying to static hosting without Next.js server
  },

  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },

  env: {
    BASE_API_URL: process.env.BASE_API_URL || 'https://torktest.vercel.app/api',
  },

  publicRuntimeConfig: {
    BASE_API_URL: process.env.BASE_API_URL || 'https://torktest.vercel.app/api',
  },
};

module.exports = nextConfig;
