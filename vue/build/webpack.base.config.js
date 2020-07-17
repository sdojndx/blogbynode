const resolve = require('path').resolve
const webpack = require('webpack')
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');
const publicPath = "./"
const chunkPackages = {

}
module.exports = {
    // entry: {
    //     index: '../app.js'
    // },
    // output: {
    //     path: resolve(__dirname, '../../dist/client'),
    //     chunkFilename: '[name].js?[hash]'
    // },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    cssModules: {
                        localIdentName: '[path][name]---[local]---[hash:base64:5]',
                        camelCase: true
                    },
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        scss: 'vue-style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.js$/,
                // use: ['babel-loader'],
                use:['happypack/loader?id=babel'],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ['style-loader', {
                    loader: 'css-loader'
                }, 'postcss-loader']
                // use:['happypack/loader?id=style']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'images/[hash].[ext]'
                    }
                }]
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?.+)?$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000,
                        name: 'fonts/[hash].[ext]'
                    }
                }]
            },
            {
                test: /\.scss$/,  //增加，解析lang=scss的内容
                use: ['vue-style-loader', {
                    loader: 'css-loader',
                    options: {
                        modules: true,// 自定义生成的类名
                        localIdentName: '[local]_[hash:base64:8]'
                    }
                }, 'postcss-loader', 'sass-loader']
                //loader:'vue-style-loader!css-loader!sass-loader' //这里不可以少，也折腾了好久，千万不要使用loader:'sass-loader'的形式
            },
            {
                test: /\.md$/,
                use: [{
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                }]
            }
        ]
    },
    performance:{
        hints:"warning"
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            ignoreOrder: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin(),
        new HappyPack({
            id:'babel',
            loaders:['babel-loader']
        })
        // new HappyPack({
        //     id:'style',
        //     loaders:['style-loader', {
        //         loader: 'css-loader'
        //     }, 'postcss-loader']
        // })
    ],
    resolve: {
        alias: {
            '~': resolve(__dirname, '../src')
        },
        extensions: [".vue", ".js", ".json"]
    },
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader'
        }
    },
    performance: {
        hints: "warning"
    }
}
