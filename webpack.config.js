const path = require("path/posix");

module.exports = {
  entry: {
    main: path.join(__dirname, "src", "main.tsx"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.join(__dirname, "web", "app"),
  },
  mode: process.env.NODE_ENV || "development",
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
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
      }
    ],
  },
}
