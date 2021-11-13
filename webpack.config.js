const path = require("path/posix");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "main.ts"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "web", "app"),
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    fallback: {
      buffer: require.resolve("buffer"),
      assert: require.resolve("assert"),
      path: require.resolve("path-browserify"),
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, /web/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["react-hot-loader/babel"],
          },
        },
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /web/],
        use: {
          loader: "ts-loader",
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
}
