var path = require('path');

module.exports = {
  entry: `${__dirname}/src/index.js`,
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/public`
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: [/\.js$/, /\.es6$/],
        exclude: path.resolve(__dirname, 'node_modules/'),
        query: {
          presets: ['@babel/preset-react'],
          // plugins: ['transform-class-properties']
        }
      }
    ]
  }

}