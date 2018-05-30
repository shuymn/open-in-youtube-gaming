const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    background: "./src/script/background.ts"
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "script/[name].js"
  },
  module: {
    rules: [{ test: /\.ts$/, use: "ts-loader" }]
  },
  resolve: {
    extensions: [".ts"]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: "./src/manifest.json", to: "./" },
      { from: "./src/locale/en/messages.json", to: "./_locales/en" },
      { from: "./src/locale/ja/messages.json", to: "./_locales/ja" },
      { from: "./src/image", to: "./image" }
    ])
  ]
};
