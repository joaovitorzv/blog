/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['media.graphcms.com']
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/post/:slug',
          destination: '/a/:slug',
        },
      ],
    };
  },
};
