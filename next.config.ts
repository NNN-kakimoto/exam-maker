import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    LIFF_ID: process.env.LIFF_ID,
    NEXT_PUBLIC_BUILD_ID: process.env.BUILD_ID,
  },
};

export default nextConfig;
