const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const merge = require('webpack-merge');
// const argv = require('yargs-parser')(process.argv.slice(2))
// const _mode = argv.mode || 'development';
// const _mergeConfig = require(`./config/webpack.${_mode}.js`)
// const webpackBar = require('webpackbar');

module.exports = {
  entry:
    './src/index',
  // another: './src/module'
  module: {
    rules: [
      // {
      //   test: /\.tsx?$/,
      //   use: 'ts-loader',
      //   exclude: /node_modules/,
      // },
      {
        test: /\.([jt]sx?)?$/,
        use: "swc-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "hello react", // 页面 title
      template: "index.html"
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
};