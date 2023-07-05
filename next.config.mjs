/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
export default config;
