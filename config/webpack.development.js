const path = require('path');

module.exports = () => ({
    output:{
        filename: 'js/[name]-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: ''
    },
    devServer: {
        contentBase: 'dist',
        overlay: true, // Shows error overlay
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/
            }       
        ]
    }
});