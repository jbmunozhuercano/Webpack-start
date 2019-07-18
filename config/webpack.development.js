const path = require('path');

module.exports = () => ({
    output:{
        contentBase: '../src',
	    historyApiFallback: true,
        overlay: true, // Shows error overlay
        inline: true,
        port: 3000
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
