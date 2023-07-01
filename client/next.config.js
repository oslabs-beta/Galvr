/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable standalone build in .next for Docker deployment
  output: 'standalone',

  compiler: {
    removeConsole: false,
  },
};

module.exports = nextConfig;
