// Importing the next-pwa package as a default import
import nextPWA from "next-pwa";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define the Next.js configuration
const nextConfig = {
  includePaths: [path.join(__dirname, "styles")],
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

const sassOptions = {};

// Export the Next.js configuration wrapped with the next-pwa function and options
export default nextPWA(pwaOptions)(nextConfig);
