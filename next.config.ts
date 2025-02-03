import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.cache = false;
    
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;
