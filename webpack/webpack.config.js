var path = require('path');

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  
  module: {
    rules: [{
      test: /\.js$/, 
      exclude: /node_modules/, 
      use: 'jshint-loader'
    }]
  }
};