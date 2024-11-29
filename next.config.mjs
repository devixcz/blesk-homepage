/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '*.rsc.cdn77.org',
          port: '',
          pathname: '**',
        },
      ],
    },  
    webpack: (config) => {
      config.module.rules.push({
        test: /\.stories\.(js|jsx|ts|tsx)$/,
        loader: 'ignore-loader',
      });
      return config;
    },
  };
  
  export default nextConfig;
  