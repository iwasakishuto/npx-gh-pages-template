const urlPrefix = process.env.URL_PREFIX ? "/" + process.env.URL_PREFIX : "";

const nextConfig = {
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
};

module.exports = nextConfig;
