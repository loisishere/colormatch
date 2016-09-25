var webpack = require("webpack");

module.exports = {
    entry: {
        app: "./app/assets/scripts/app.js",
        vendor: ["jquery"],
    },
    output: {
        filename: "./app/temp/scripts/app.bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            "vendor",
            "./app/temp/scripts/vendor.bundle.js"
        )
    ]
};