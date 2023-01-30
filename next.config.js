/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    maxAge: 86400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ap-southeast-1.amazonaws.com",
        port: "",
        pathname: "/halcyon-agile-saas-platform-boilerplate/**",
      },
    ],
  },
};

module.exports = nextConfig
