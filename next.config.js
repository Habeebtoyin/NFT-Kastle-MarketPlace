/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    // loader: "akamai",
    // path: "",
    hostname: 'res.cloudinary.com',
    domains: ["ipfs.infura.io", "nft-kastle.infura-ipfs.io", 'res.cloudinary.com'],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors
    ignoreDuringBuilds: true,
  },
};
