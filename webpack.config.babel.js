import path from 'path';

const config = {
  entry: {
    js: './src/app-client.js',
  },
  output: {
    path: path.join(__dirname, 'src', 'static', 'js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: 'cacheDirectory=.babel_cache',
        },
      },
    ],
  },
  plugins: [],
};

export default config;
