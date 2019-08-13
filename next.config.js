const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');
const path = require('path');
const CompressionPlugin = require('compression-webpack-plugin');

/*****************************************************************************
 * SET YOUR CONFIGURATION HERE
 *****************************************************************************/

// Set base path if your static app does not start from root
const basePath = '';
const gaID = 'UA-138723882-1';
const searchConsoleID = '1yJwtZmUEW1QsrrIvRrXiBHA4O1yBmKeJBxP3txMgrI';

// Set any other dynamic routes in pages
const dynamicRoutes = {}

/*****************************************************************************
 *****************************************************************************/

const webpackBasePath = process.env.SPA_EXP_BUILD === 'true' ? basePath : ''

module.exports = withSass(withCSS({
  publicRuntimeConfig: {
    basePath: webpackBasePath,
    gaID,
    searchConsoleID,
  },
  assetPrefix: webpackBasePath,
  exportPathMap: async function(defaultPathMap) {
    return Object.assign({}, defaultPathMap, dynamicRoutes);
  },
  webpack: function(config) {
    config.module.rules.push(
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            fallback: 'file-loader',
            publicPath: `${webpackBasePath}/_next/static/images/`,
            outputPath: 'static/images/',
            name: '[name].[hash:15].[ext]',
          },
        },
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            publicPath: `${webpackBasePath}/_next/static/fonts/`,
            outputPath: 'static/fonts/',
          }
        }
      }
    );

    config.plugins.push(new CompressionPlugin());
    config.resolve.alias['@styles'] = path.join(__dirname, 'styles');
    config.resolve.alias['@helpers'] = path.join(__dirname, 'helpers');
    config.resolve.alias['@images'] = path.join(__dirname, 'images');
    config.resolve.alias['@external-libraries'] = path.join(__dirname, 'external-libraries');

    return config;
  }
}));