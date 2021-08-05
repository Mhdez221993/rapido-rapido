const path = require('path');
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');

const options = {};
module.exports = {
  mode: 'production',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new GhPagesWebpackPlugin({
        path: 'https://mhdez221993.github.io/JavaScript-capstone-project/',
        options: {
            message: 'Update Home Page',
            user: {
                name: 'Moises Hernandez',
                email: 'mhdezcoronado@gmail.com'
            }
        }
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new WebpackManifestPlugin(options),
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[id].[chunkhash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
