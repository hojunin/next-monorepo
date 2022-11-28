const withTM = require('next-transpile-modules')([
  '@getcha/components',
  '@getcha/modules',
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = withTM(nextConfig);
