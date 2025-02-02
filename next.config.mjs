/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:3000/:path*' // ここにバックエンドサーバーのURLを設定します
      },
    ]
  },
}

export default nextConfig;