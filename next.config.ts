import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.ds3comunicaciones.com',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'cdn.thefpsreview.com',
      },
      {
        protocol: 'https',
        hostname: 'www.amphenolalden.com',
      },
      {
        protocol: 'https',
        hostname: '1000marcas.net',
      },
      {
        protocol: 'https',
        hostname: 'ssd2.s3.amazonaws.com',
      },
    ]
  },
  allowedDevOrigins: ['http://localhost:3000'],
};

export default nextConfig;
