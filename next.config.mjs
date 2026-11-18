/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/blogs-en', destination: '/blogs', permanent: true },
      { source: '/blogs-en/:slug', destination: '/blogs/:slug', permanent: true },
    ];
  },
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
