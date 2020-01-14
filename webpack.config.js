const path = require('path'); //nodejs内置模块
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  //入口
  entry: './src/main.js',
  //出口
  output: {
    path: path.resolve(__dirname, 'dist'), // d://webpakc/dist
    filename: 'bundle.js' // d://webpakc/dist/bundle.js
  },
  //loaders
  module: {
    rules: [{
      test: /\.js$/,
      exclude: path.resolve(__dirname, 'node_modules'),
      include: path.resolve(__dirname, 'src'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
    // css样式
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    },
    // 图像
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 30000
          }
        }
      ]
    },
    {
      test: /\.(ttf|eot|woff|woff2|svg)/,
      use: ['file-loader']
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader'
    },
    ]
  },

  //插件
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: __dirname + "/public/index.html"
    }),
    new VueLoaderPlugin()
  ],

};