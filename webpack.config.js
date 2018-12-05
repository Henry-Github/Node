module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devServer: {
        port: 8080,
        host: "0.0.0.0",
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    }
};
