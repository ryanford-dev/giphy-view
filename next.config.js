module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.jsx?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
