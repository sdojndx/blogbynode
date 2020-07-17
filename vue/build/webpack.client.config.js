const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {merge} = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const common = require('./webpack.base.config.js')
// const dev_conf = require('./webpack.dev.js')
const { client } = require('./env')

module.exports = merge(common, {//dev_conf, {
  entry: client.entry,
  output: client.output,
  plugins: [
    // 生成客户端构建清单 (client build manifest)
    // 默认文件名为 `vue-ssr-client-manifest.json`
    new VueSSRClientPlugin(),
    new HtmlWebpackPlugin({
      title: "浏览器渲染",
      // 本地模板文件的位置
      template: path.resolve(__dirname, '../ejs/client.ejs'),
      // 输出文件的文件名称
      filename: 'client.html'
    })
  ],
  optimization: {
      splitChunks: {
          chunks: 'all',
          maxInitialRequests: 1
      },
      runtimeChunk: {
          name: 'vendor'
      }
  },
})