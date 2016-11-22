import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';

const ENV = process.env.NODE_ENV || 'development';

module.exports = {
	entry: './src/index.js',

	output: {
		path: './build',
		publicPath: '/',
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['', '.jsx', '.js', '.json', '.less']
	},

	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				exclude: /src\//,
				loader: 'source-map'
			}
		],
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel'
			},
			{
				test: /\.(less|css)$/,
				loader: ExtractTextPlugin.extract('css?sourceMap!postcss!less?sourceMap')
			},
			{
				test: /\.json$/,
				loader: 'json'
			},
			{
				test: /\.(xml|html|txt)$/,
				loader: 'raw'
			},
			{
				test: /\.(svg|woff|ttf|eot)(\?.*)?$/i,
				loader: 'file-loader?name=assets/fonts/[name]_[hash:base64:5].[ext]'
			}
		]
	},

	postcss: () => [
		autoprefixer({ browsers: 'last 2 versions' })
	],

	plugins: ([
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css', { allChunks: true }),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV)
		}),
		new HtmlWebpackPlugin()
	]).concat(ENV === 'production' ? [
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin()
	] : []),

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
