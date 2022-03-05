module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  target: "web", // nodeだとrequeireとかサーバでか使えない記法になる
  output: {
    path: __dirname + "/public",
    filename: "client.js",
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
