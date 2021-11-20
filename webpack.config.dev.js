const base = require('./webpack.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = Object.assign({}, base,{
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: "index.html"
        }),
    ],
})