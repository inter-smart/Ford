/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.fordoman.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "admin.fordoman.com",
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