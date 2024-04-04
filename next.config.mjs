/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
    SERVER_COMPONENTS_EXTERNAL_PACKAGES: 'mongoose',
    },
    images: {
      remotePatterns: [
        {
          hostname: 'lh3.googleusercontent.com',
          protocol: 'https',
          pathname: '/**',
        },
      ],
    },
    webpack(config) {
      config.experiments = {
        ...config.experiments,
        topLevelAwait: true,
      }
      return config
    }
  }
  
 export default nextConfig;
  