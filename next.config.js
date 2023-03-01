/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_TENANT_S3_HOSTNAME,
        port: "",
        pathname: `/${process.env.NEXT_PUBLIC_TENANT_S3_PATHNAME}/**`,
      },
    ],
  },
};

module.exports = nextConfig
