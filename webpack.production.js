const webpack = require('webpack');
const path = require('path');
const rules = require('./webpack.rules');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');


// local css modules
rules.push({
    test: /[\/\\]src[\/\\].*\.css/,
    exclude: /(node_modules|bower_components|public)/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?importLoaders=1!resolve-url-loader',
    }),
});

// local scss modules
rules.push({
    test: /[\/\\]src[\/\\].*\.scss/,
    exclude: /(node_modules|bower_components|public)/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader?importLoaders=1!postcss-loader!resolve-url-loader!sass-loader',
    }),
});
// global css files
rules.push({
    test: /[\/\\](node_modules|global)[\/\\].*\.css$/,
    loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!resolve-url-loader',
    }),
});

module.exports = {
    entry: [
        './src/index.jsx',
    ],
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[chunkhash].js',
    },
    resolve: {
        alias: {
            actions: path.resolve(__dirname, 'src', 'actions'),
            components: path.resolve(__dirname, 'src', 'components'),
            css: path.resolve(__dirname, 'src', 'static', 'css'),
            containers: path.resolve(__dirname, 'src', 'containers'),
            data: path.resolve(__dirname, 'src', 'static', 'data'),
            img: path.resolve(__dirname, 'src', 'static', 'img'),
            reducers: path.resolve(__dirname, 'src', 'reducers'),
            utils: path.resolve(__dirname, 'src', 'utils'),
        },
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules,
    },
    plugins: [
        new WebpackCleanupPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true,
            },
        }),
        new ExtractTextPlugin({
            filename: '[contenthash].css',
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            title: 'NeelyWeds',
        }),
    ],
};
