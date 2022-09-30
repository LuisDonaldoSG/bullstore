/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com','api.lorem.space','encrypted-tbn0.gstatic.com','picsum.photos','placeimg.conn','firebasestorage.googleapis.com']
  },
  /*env: {
    customKey: 'customValue',
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://gndx.dev',
        permanent: true,
      }
    ]
  }*/
}

module.exports = nextConfig
