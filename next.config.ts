import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      { source: '/logo', destination: '/example/logo', permanent: true },
    ]
  },
};

export default nextConfig;
