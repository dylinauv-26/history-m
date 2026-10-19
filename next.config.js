/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // Разрешаем загрузку .obj файлов
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(obj|mtl)$/,
      type: 'asset/resource',
    });
    return config;
  },
}

module.exports = nextConfig;
