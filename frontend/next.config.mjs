/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'res.cloudinary.com',
      'localhost',
      '127.0.0.1',
      'green-world-shop.vercel.app',
    ],
  },

  reactStrictMode: true,
};

export default nextConfig;
