//config.js
var path = require('path');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: path.join(__dirname, 'min'),
    filename: 'index.min.js',
    publicPath: ''
  },
  module: {
        loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loader: "style!css!sass"},
            { test: /\.svg$/, loader: "url?limit=8192"}
        ]
    }
}
