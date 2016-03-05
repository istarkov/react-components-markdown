import path from 'path';
import autoprefixer from 'autoprefixer';

const alias = {
  'react-components-markdown': path.join(__dirname, '../src'),
};

export default {
  output: {
    libraryTarget: 'commonjs2',
  },
  resolve: {
    alias,
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
