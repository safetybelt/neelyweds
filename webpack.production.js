var webpack = require('webpack');
var path = require('path');
var rules = require('./webpack.rules');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');


// local css modules
rules.push({
    test: /[\/\\]src[\/\\].*\.css/,
    exclude: /(node_modules|bower_components|public)/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!resolve-url-loader',
    }),
});

// local scss modules
rules.push({
    test: /[\/\\]src[\/\\].*\.scss/,
    exclude: /(node_modules|bower_components|public)/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!resolve-url-loader!sass-loader',
    }),
});
// global css files
rules.push({
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: 'css-loader!resolve-url-loader',
    }),
});

module.exports = {
    entry: [
        './src/index.jsx'
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[chunkhash].js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        }),
        new ExtractTextPlugin('[contenthash].css', {
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            title: 'NeelyWeds'
        }),
    ]
};
