import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/inbox",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
