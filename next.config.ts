import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NEXT_PUBLIC_LIFF_ID: process.env.LIFF_ID,
    NEXT_PUBLIC_BUILD_ID: process.env.BUILD_ID,
  },
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
