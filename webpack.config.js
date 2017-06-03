/*eslint-disable */
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
global.Promise = require('bluebird');

module.exports = {
    entry: "./src/main.js",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development' )
            }
        }),
        new ExtractTextPlugin('main.css', {allChunks: true})
    ],
    output: {
        path: __dirname + '/public/static/build/',
        filename: "main.js",
        publicPath: "/static/build/"
    },

    module: {
        noParse: [/autoit.js/],
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer"),
                exclude: /plain.css/
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer!less")
            },
            {
                test: /plain.css/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader")
            },
            { test: /\.gif$/, loader: "url-loader?limit=10000&mimetype=image/gif" },
            { test: /\.jpg$/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
            { test: /\.png$/, loader: "url-loader?limit=10000&mimetype=image/png" },
            { test: /\.svg/, loader: "url-loader?limit=26000&mimetype=image/svg+xml" },
            { test: /\.(woff|woff2|ttf|eot)/, loader: "url-loader?limit=1" },
            { test: /\.jsx$/, loader: "react-hot!babel!eslint-loader", exclude: [/node_modules/, /public/] },
            { test: /\.js$/, loader: "babel!eslint-loader", exclude: [/node_modules/, /public/] },
            { test: /\.json$/, loader: "json-loader"}
        ]
    },

    eslint: {
        configFile: '.eslintrc'
    },

    devServer: {
        historyApiFallback: true
    }
};
