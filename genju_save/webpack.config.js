const path = require("path");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?modules'],
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "bundle.js"
  },

  resolve: {
    extensions: ['.js', '.jsx']
  },

  plugins: [
    new CopyPlugin([{
      from: 'src/index.html',
      to: './'
    }]),
  ],
};
