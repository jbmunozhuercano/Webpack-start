const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // Cleans path directory of files
const HtmlWebpackPlugin = require('html-webpack-plugin'); // Generates the html file in dist

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'js/bundle.[contenthash].min.js',
		path: path.resolve(__dirname, './dist'),
		publicPath: '',
	},
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader',
				],
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
		new MiniCssExtractPlugin({
			filename: 'css/style.[contenthash].css',
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
};
