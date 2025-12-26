import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // Production-specific settings
    output: 'standalone', // Creates a standalone build that's optimized for production
    poweredByHeader: false, // Removes the "X-Powered-By: Next.js" header
    reactStrictMode: true, // Enable React strict mode for better error catching
    basePath: '/extended-portfolio', // Set the base path for the application
    //swcMinify: true, // Use SWC minifier instead of Terser for better performance

    // Image optimization settings
    images: {
        domains: [], // Add any external domains for images here
        formats: ['image/webp'], // Preferred image formats
    },

    // Optional: performance optimizations
    experimental: {
        // Enable modern optimizations
        optimizeCss: true,
        optimizePackageImports: ['lucide-react'],
    },

    // Environment variable configuration (if needed)
    env: {
        // Add your public environment variables here
    },
};

export default nextConfig;