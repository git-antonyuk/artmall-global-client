const path = require('path')
const { i18n } = require('./next-i18next.config');
const withAntdLess = require('next-plugin-antd-less');

/** @type {import('next').NextConfig} */
const nextConfig = withAntdLess({
  // settings
  reactStrictMode: true,
  // localization
  i18n,
  // scss
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "./styles/index.scss";`,
  },
  // ant theme
  lessVarsFilePath: './styles/ant/variables.less',
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},


  webpack(config) {
    return config;
  },

  future: {
    webpack5: true,
  },
})

module.exports = nextConfig
