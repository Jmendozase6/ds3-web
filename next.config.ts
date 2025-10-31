import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,
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
  basePath: isProd ? '/ds3-web' : '',
  assetPrefix: isProd ? '/ds3-web' : '',
  allowedDevOrigins: ['http://localhost:3000'],
};

export default nextConfig;
