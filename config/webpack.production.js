const path = require('path');

const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = () => ({
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new TerserJSPlugin(),
            new OptimizeCSSAssetsPlugin()
        ]
    },
    output:{
        filename: 'js/[contenthash]].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: ''
    }
});