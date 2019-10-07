const webpack = require('webpack');
const webpackMerge = require('webpack-merge');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const VueLoaderPlugin = require('vue-loader/lib/plugin');

const modeConfig = env => require(`./config/webpack.${env}`)(env);

module.exports = ({mode} = {mode: 'production'}) => {

    return webpackMerge({
        entry: {
            main: './src/js/main.js'
        },
        mode,
        resolve: {
            alias: {
              'vue$': 'vue/dist/vue.esm.js' // Solves the error 'You are using the runtime-only build of Vue'
            },
             extensions: ['*', '.js', '.vue', '.json']
        },
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'vue-style-loader'
                        'css-loader'                        
                    ]
                },
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
                },
                {
                    test: /\.vue$/,
                    use: {
                        loader: 'vue-loader'
                    }
                }     
            ]
        },
        plugins: [
            new HTMLWebpackPlugin({
                template: './src/index.html'
            }),
            new MiniCssExtractPlugin({
                filename: 'css/style.[contenthash].css'
            }),
            new VueLoaderPlugin()
        ]
    },
    modeConfig(mode)
    );
}; 
