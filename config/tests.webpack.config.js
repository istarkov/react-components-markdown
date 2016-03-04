var path = require('path'); // eslint-disable-line no-var
var autoprefixer = require('autoprefixer'); // eslint-disable-line no-var

var alias = {  // eslint-disable-line no-var
  'react-components-markdown': path.join(__dirname, '../src'),
};

module.exports = {
  output: {
    libraryTarget: 'commonjs2',
    // path: path.join(__dirname, '../lib'),
  },
  resolve: {
    alias: alias, // eslint-disable-line
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:5]',
          'postcss-loader',
        ],
      },
    ],
  },
};
