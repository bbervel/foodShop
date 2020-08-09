const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/agregator.js',
  output: {
    path: __dirname + '/bundle',
    filename: 'bundle.js'
  },
  watch: false,
  devtool:'source-map',
  module:{}
};