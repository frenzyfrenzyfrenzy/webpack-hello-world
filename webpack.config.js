const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],
    entry: [path.resolve(__dirname, "src", "js", "main.js")],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "main.js"
    },
    mode: "development",
    devtool: "source-map",
    devServer: {
        contentBase: path.resolve(__dirname, "build"),
        compress: false,
        port: 9000,
        writeToDisk: true
    }
};