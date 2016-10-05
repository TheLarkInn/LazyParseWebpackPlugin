const path = require("path");
const webpack = require("webpack");
const LazyParseWebpackPlugin = require('../index.js');

module.exports = {
  bail: true,
  entry: path.resolve(__dirname, "./src/entry.js"),
  output: {
    filename: "[name].chunk.js",
    path: path.resolve(__dirname, "./dist")
  },
  plugins: [
    new LazyParseWebpackPlugin()
  ] 
}