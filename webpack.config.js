module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: './dist'
  },
  loaders: [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: "babel-loader"
  }]
};
