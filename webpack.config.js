const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const modeConfig = env => require(`./config/webpack.${env}`)(env);

module.exports = ({mode} = {mode: 'production'}) => {

    return webpackMerge({
        entry: {
            main: './src/js/main.js'
        },
        mode,
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        {
                            loader: 'postcss-loader',
                            options: {
                                indent: 'postcss',
                                plugins: [
                                    require('autoprefixer')
                                ]
                            }
                        },                        
                        'sass-loader'
                    ]
                },
                {
                    test: /\.html$/,
                    use: [
                       {
                            loader: 'html-loader', // 1st - Lents html file
                        }
                    ]
                },
                {
                    test: /\.(jpe?g|svg|png)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 5000,
                                name: 'images/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'css/style.[contenthash].css'
            })
        ]
    },
    modeConfig(mode)
    );
}; 
