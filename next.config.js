/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['media.graphcms.com']
  },
  async redirects() {
    return [
      {
        source: '/post/:path*',
        destination: '/a/:path*',
        permanent: true,
      },
    ];
  },
};
