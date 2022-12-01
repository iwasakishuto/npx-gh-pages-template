const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  /**
   * <--- Settings for Github Pages ---
   */
  assetPrefix: urlPrefix,
  basePath: urlPrefix,
  trailingSlash: true,
  /**
   * --- END Settings for Github Pages --->
   */
  images: {
    unoptimized: true,
  },
});

module.exports = nextConfig;
