/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev18.intersmarthosting.in",
        pathname: "/**",
      },
    ],
    qualities: [75, 100],
  },
};

module.exports = nextConfig;