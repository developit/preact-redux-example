const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const ENV = process.env.NODE_ENV || 'development';

const modules = {
	rules: [{
		test: /\.(js|jsx)$/,
		exclude: /node_modules/,
		use: [
			{
				loader: 'babel-loader',
				query: {
					cacheDirectory: true
				}
			}
		]
	}, {
		test: /\.(less|css)$/,
		use: ExtractTextPlugin.extract({
			fallback: 'style-loader',
			loader: [{
				loader: 'css-loader',
				options: {
					sourceMap: true
				}
			},
			{
				loader: 'postcss-loader',
				options: {
					plugins: function () {
						return [autoprefixer({ browsers: 'last 2 versions' })];
					},
				},
			},
			{
				loader: 'less-loader',
				options: {
					sourceMap: true
				}
			}
			]
		}),
	}, {
		test: /\.json$/,
		use: 'json'
	},
	{
		test: /\.(xml|html|txt)$/,
		use: 'raw'
	},
	{
		test: /\.(svg|woff|ttf|eot)(\?.*)?$/i,
		use: [{
			loader: 'file-loader',
			options: {
				name: 'name=assets/fonts/[name]_[hash:base64:5].[ext]'
			}
		}]
	}
	]
}
module.exports = {
	entry: './src/index.js',

	output: {
		path: './build',
		publicPath: '/',
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['.jsx', '.js', '.json', '.less']
	},

	module: modules,

	plugins: ([
		new webpack.NoEmitOnErrorsPlugin(),
		new ExtractTextPlugin({ filename: 'style.css', allChunks: true }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV)
		}),
		new HtmlWebpackPlugin()
	]),

	stats: { colors: true },

	devtool: ENV === 'production' ? 'source-map' : 'inline-source-map',

	devServer: {
		port: process.env.PORT || 8080,
		host: '0.0.0.0',
		colors: true,
		publicPath: '/',
		contentBase: './src',
		historyApiFallback: true,
		proxy: [
			// OPTIONAL: proxy configuration:
			// {
			// 	path: '/optional-prefix/**',
			// 	target: 'http://target-host.com',
			// 	rewrite: req => { req.url = req.url.replace(/^\/[^\/]+\//, ''); }   // strip first path segment
			// }
		]
	}
};
