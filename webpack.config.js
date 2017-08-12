const path = require('path');
const webpack = require('webpack');
const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  watchOptions: {
//    poll: true, // これがあるとcpu使用率が跳ね上がるがないと変更が反映されない
    ignore: /node_modules/,
  },
  devServer: {
    contentBase: 'dist',
    host: '0.0.0.0',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { minimize: true },
          },
        ],
      },
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'src'),
      'node_modules',
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: debug,
      beautify: debug,
      mangle: {
        screw_ie8: !debug,
        keep_fnames: !debug,
      },
      compress: {
        screw_ie8: !debug,
        warnings: debug,
      },
      comments: debug,
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: !debug,
      debug: debug,
      options: { context: __dirname },
    }),
    new webpack.ProvidePlugin({
      m: 'mithril'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: debug ? '"develop"' : '"production"',
      },
    }),
  ],
};
