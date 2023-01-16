const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const mainAppId = fs.readFileSync(
  path.join(__dirname, '../config-main-app-id'),
  'utf-8'
)

module.exports = {
  optimization: {
    minimize: false
  },
  mode: 'production',
  output: {
    publicPath: './',
    filename: '[name].js',
    path: path.resolve(__dirname, 'applet-dist'),
    library: {
      type: 'module'
    },
  },
  experiments: {
    outputModule: true,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      __MAIN_APP_ID__: JSON.stringify(mainAppId),
      __ADMIN_PORT__: 1235,
      __APP_PORT__: 8889,
    }),
    new MiniCssExtractPlugin({
      filename: 'cssBundle.css'
    }),
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  entry: {
    index: './src/appletIndex.ts',
    // css: './src/index.scss'
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      fs: false
    }
  },
  devServer: {
    host: 'localhost',
    allowedHosts: 'all',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react'],
            plugins: [],
          },
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: [/node_modules/, /src\/stories/],
        use: 'ts-loader',
      },
      // fonts
      {
        // svg could be added here, but would need to be distinguished
        // from non-font svgs
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
        type: 'javascript/auto'
      },
      // .png, .jpg, .svg images
      {
        test: /\.(png|jpg|svg)$/,
        type: 'asset/inline'
      },
      // scss
      {
        test: /\.scss$/i,
        use: [
          // Creates `style` nodes from JS strings
          // 'style-loader',
          // Translates CSS into CommonJS
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader', // useful for font loading
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      // css
      {
        test: /\.css$/,
        use: ['css-loader'],
      },
    ],
  },
}
