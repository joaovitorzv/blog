const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const config = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  // images: {
  //   loader: "custom",
  //   domains: ["media.graphcms.com"],
  // },
};

module.exports = withMDX(config);
