/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: 'custom',
    domains: ['media.graphcms.com']
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/post/:slug',
          destination: '/a/:slug',
        },
      ],
    };
  },
};
