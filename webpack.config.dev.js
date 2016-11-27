import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
  debug: true,
  devtool: 'inline-source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/scripts/vendor'),
    main: path.resolve(__dirname, 'src/scripts/app')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: '[name].js'
  },
  plugins: [
	// Generate an external css file
    new ExtractTextPlugin('[name].css'),

    // Use CommonsChunkPlugin to create a separate bundle
    // of vendor libraries so that they're cached separately.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader!css-loader!autoprefixer-loader")},
	  {test: /\.scss$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader")}
    ]
  }
}
