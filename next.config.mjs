/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kayagnhlondon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.kayagnhlondon.com',
        pathname: '/**',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
