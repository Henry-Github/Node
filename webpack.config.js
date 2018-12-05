module.exports = {
    devtool: 'eval-source-map',
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    devServer: {
        port: 9000,
        contentBase: "./public",
        historyApiFallback: true,
        inline: true
    }
};
