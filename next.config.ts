import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployments
  // Commented out for Windows local builds - uncomment for Docker
  // output: 'standalone',
};

export default nextConfig;
