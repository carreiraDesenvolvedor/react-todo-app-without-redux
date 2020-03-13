const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {

    entry:"./src/index.jsx",
    output: {
        path: __dirname+"./public",
        filename: "./app.js"
    },
    devServer: {
        port:8080,
        contentBase:"./public"
    },

    resolve: {

        extensions: ['.js', '.jsx', '.css'],
        alias: {
            modules:__dirname+"/node_modules"
        }
    },


    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test:"/\.html$/",
                use:[
                    {
                        loader: "html-loader"
                    }
                ]
            },

            {
                test: /\.scss$/,
                use:  [  MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },

            {
                test: /\.css$/,
                use:  [  MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }


        ]
    },

    plugins: [
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin()
    ]
}