var path = require('path'); // eslint-disable-line no-var
var autoprefixer = require('autoprefixer'); // eslint-disable-line no-var
var webpack = require('webpack');  // eslint-disable-line no-var

var envObj = Object.keys(process.env)  // eslint-disable-line no-var
  .reduce((r, k) => Object.assign({}, r, {
    [k]: JSON.stringify(process.env[k]),
  }), {});

var alias = {  // eslint-disable-line no-var
  'react-components-markdown': path.join(__dirname, '../src'),
};

module.exports = {
  resolve: {
    alias: alias, // eslint-disable-line
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
  plugins: [
    new webpack.DefinePlugin({
      'process.env': envObj,
    }),
  ],
  module: {
    loaders: [
      {
        test: /\.sass$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=2&localIdentName=[name]__[local]__[hash:5]',
          'postcss-loader',
          'sass-loader?precision=10&indentedSyntax=sass',
        ],
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:5]',
          'postcss-loader',
        ],
      },
      {
        test: /\.svg$/,
        loaders: ['url-loader?limit=7000'],
      },
      {
        test: /\.md$/,
        loaders: ['raw-loader'],
      },
    ],
  },
};
