const path = require('path');

module.exports = {
  entry: './src/scripts',
  output: {
    path: path.resolve(__dirname, 'dist/scripts'),
    filename: 'index.js',
    library: 'utils',
  },

  devtool: "source-map",

  resolve: {
    extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader"
      }
    ]
  }
};
