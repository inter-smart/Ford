const createNextIntlPlugin = require("next-intl/plugin");

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "yangwang.dev20.intersmarthosting.in",
        pathname: "/**", // Allow all image paths
      },
      {
        protocol: "https",
        hostname: "www.yangwang.dev20.intersmarthosting.in",
        pathname: "/**", // Allow all image paths
      },
    ],
  },
};

module.exports = withNextIntl(nextConfig);
