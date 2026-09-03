import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker deployments when specified
  output: process.env.DOCKER_BUILD === "true" ? "standalone" : undefined,
};

export default nextConfig;
