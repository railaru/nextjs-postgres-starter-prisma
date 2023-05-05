/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ["pbs.twimg.com", "via.placeholder.com"],
  },
};

module.exports = nextConfig;
