/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
   return [
    {
      source: '/congelados',
      destination: '/preparados',
      permanent: true,
    },
    {
      source: '/carnes-vacunas',
      destination: '/cortes-vacunos',
      permanent: true,
    },
    {
      source: '/cortes-para-parrilla',
      destination: '/carnes-para-parrilla',
      permanent: true,
    },
    {
      source: '/cortes-para-plancha',
      destination: '/carnes-para-plancha',
      permanent: true,
    }
    ,
    {
      source: '/cortes-para-cacerola',
      destination: '/carnes-para-cacerola',
      permanent: true,
    },
    {
      source: '/cortes-para-horno',
      destination: '/carnes-para-horno',
      permanent: true,
    },
    {
      source: '/carnes-de-cerdo',
      destination: '/cortes-cerdo',
      permanent: true,
    },
    {
      source: '/cortes-para-milanesas',
      destination: '/carnes-para-milanesas',
      permanent: true,
    },
    {
      source: '/carnes-de-pollo',
      destination: '/cortes-pollo',
      permanent: true,
    },
    {
      source: '/costillar',
      destination: '/vacuno/40',
      permanent: true,
    },
    {
      source: '/asado-del-centro',
      destination: '/vacuno/53',
      permanent: true,
    },
    {
      source: '/picaña',
      destination: '/vacuno/17',
      permanent: true,
    },
   ]
  },
  images: {
    domains: ['firebasestorage.googleapis.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.bicifan.uy'
      },
      {
        protocol: 'https',
        hostname: 'img.freepik.com'
      }

    ]
  }
}

module.exports = nextConfig
