const withCSS = require("@zeit/next-css")
const withSass = require("@zeit/next-sass")
const withPlugins = require("next-compose-plugins")

const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        {
          loader: "sass-loader",
          options: {
            includePaths: ["node_modules"]
          }
        }
      ]
    })
    return config
  }
}

module.exports = withPlugins([[withCSS], [withSass]], nextConfig)
