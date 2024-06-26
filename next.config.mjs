// Importing the next-pwa package as a default import
import nextPWA from "next-pwa";

// Define the Next.js configuration
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

// Configure next-pwa options
const pwaOptions = {
  dest: "public", // Destination directory for PWA files
  disable: process.env.NODE_ENV === "development", // Disable in development
  register: true, // Register the PWA service worker
  skipWaiting: true, // Skip waiting for service worker activation
};

// Export the Next.js configuration wrapped with the next-pwa function and options
export default nextPWA(pwaOptions)(nextConfig);
