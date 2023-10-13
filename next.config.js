/** @type {import('next').NextConfig} */

const getApiHostname = () => {
  const env = process.env.NODE_ENV
  let hostname = ''
  if (env == 'development') {
    hostname = '127.0.0.1:5000'
  } else if (env == 'production') {
    hostname = ''  // TODO: get production hostname when available
  }
  return hostname
}

const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: `http://${getApiHostname()}/:path*`,
      }
    ]
  }
}

module.exports = nextConfig
