var path = require('path'); // eslint-disable-line no-var
var autoprefixer = require('autoprefixer'); // eslint-disable-line no-var
var ExtractTextPlugin = require('extract-text-webpack-plugin'); // eslint-disable-line no-var

module.exports = {
  output: {
    libraryTarget: 'commonjs2',
    path: path.join(__dirname, '../lib'),
  },
  postcss: [
    autoprefixer({ browsers: ['last 2 versions'] }),
  ],
  plugins: [
    new ExtractTextPlugin(`${path.parse(process.argv[2]).name}.css`),
  ],
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          [
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]__[hash:5]',
            'postcss-loader',
          ]
        ),
      },
    ],
  },
};
