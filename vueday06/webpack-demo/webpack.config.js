// 引入 path 模块
const path = require('path')

// 配置文件中配置 devServer 就必须先引入 webpack
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js', // 配置入口文件路径
    output: {
        path: path.join(__dirname, './dist'), // 配置输出文件路径
        filename: 'bunlde.js' // 配置的文件名
    },
    mode: 'development',
    devServer: {
        contentBase: './src', //托管的根目录
        hot: true, // 我要开启或关闭HMR
        open: true, // 自动打开浏览器
        port: 3000 // 设置打开的端口
    },
    plugins: [
        // 装了插件就表示当前项目有资格开启HMR
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            title: "标题",
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            // css-loader 用于解析css文件
            // style-loader 用于将css代码 使用js动态的插入到html中, 减少二次请求
            // use使用loader时  顺序是固定的从右到左的加载
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader"]
            },
            {
                test: /\.(png|jpg|gif|bmp|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192 // 字节 Byte 如果在8192个字节(8KB)内  就使用base64编码
                    }
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{
                    loader: 'url-loader'
                }]
            }

        ]
    }
}