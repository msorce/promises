var path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: "/dist/"
  },
  loaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  }, {
    test: /\.html$/,
    loader: "raw-loader"
  }]
};
