const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
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
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};