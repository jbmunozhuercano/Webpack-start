const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Cleans path directory of files
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Generates the html file in dist

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'js/bundle.min.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '',
	},
	mode: 'development',
	devServer: {
		static: {
			directory: path.join(__dirname, './dist'),
		},
		compress: true,
		port: 3000,
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
			{
				test: /\.js$/,
				exclude: '/node_modules/',
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/env'],
						plugins: ['transform-class-properties'],
					},
				},
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
};
