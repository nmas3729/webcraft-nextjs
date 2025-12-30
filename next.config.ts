import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true, // Move this out of `experimental`
  experimental: {
    // You can leave other experimental flags here if any
  },
  // turbopack is automatically handled, no need to set explicitly
};

export default nextConfig;
