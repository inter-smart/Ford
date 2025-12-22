/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "dev18.intersmarthosting.in",
    ], 
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        canvas: false,
      };
    }
    return config;
  },
};
export default nextConfig;
