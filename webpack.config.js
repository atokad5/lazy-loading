const path = require('path');
    
module.exports = {
  entry: './src/js/app.js', 
  output: {
    path: path.resolve(__dirname, 'build/js'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loader: 'babel-loader',
      query: {
        presets: ['env']
      }
    }]
  }
}