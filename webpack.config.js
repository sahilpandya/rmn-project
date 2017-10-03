var precss       = require('precss');
var autoprefixer = require('autoprefixer');
var postcssImport = require('postcss-import');

module.exports = {
    devtool: 'source-map',
    entry: "./index.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    devServer: {
        inline: true,
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    module: {
        loaders: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader'
            },
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.json$/, loader: 'json-loader' },
            {
             test: /\.scss$/,
             loaders: ["style", "css", "sass"]
            },
            { test: /\.less$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap' },
            { test: /\.woff2?(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml' },
        ]
    }
};
