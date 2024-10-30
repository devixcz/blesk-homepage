/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.stories\.(js|jsx|ts|tsx)$/,
        loader: 'ignore-loader',
      });
      return config;
    },
  };
  
  export default nextConfig;
  