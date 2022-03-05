module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  target: "node",
  output: {
    path: __dirname + "/build",
    filename: "[name].js",
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.js(x?)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
