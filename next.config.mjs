/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.rsc.cdn77.org",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cncenter-stg.codexcdn.net",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "videos.pexels.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "**",
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.stories\.(js|jsx|ts|tsx)$/,
      loader: "ignore-loader",
    });
    return config;
  },
};

export default nextConfig;
