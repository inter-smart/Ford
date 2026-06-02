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
  async redirects() {
    return [
      {
        source: "/old-about",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/old-contact",
        destination: "/contact",
        permanent: false,
      },
    ];
  },
};



export default nextConfig;