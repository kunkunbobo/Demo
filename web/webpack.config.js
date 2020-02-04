const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const appDir = path.resolve(__dirname, '../');

module.exports = {
    entry: {
        bundle: path.resolve(appDir, 'index.web'),
    },
    output: {
        filename: 'bundle.web.js',
        path: path.resolve(appDir, 'dist')
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                include: [
                    /src/,
                    /node_modules\/react-native-elements/,
                    /node_modules\/react-native-vector-icons/,
                    /node_modules\/react-native-status-bar-height/,
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        // Disable reading babel configuration
                        babelrc: false,
                        configFile: false,

                        // The configuration for compilation
                        presets: [
                            ['@babel/preset-env', { useBuiltIns: 'usage' }],
                            '@babel/preset-react',
                            '@babel/preset-flow',
                        ],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-proposal-object-rest-spread'
                        ],
                    },
                },
            },
            {
                test: /\.(gif|jpe?g|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]'
                    }
                }
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg)$/,
                loader: 'file-loader',
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(appDir, 'index.html'),
        }),
        // new BundleAnalyzerPlugin({
        //     analyzerMode: 'static',
        //     openAnalyzer: false,
        // }),
    ],
    resolve: {
        extensions: ['.js', '.json', '.android.js', '.ios.js'],
        alias: {
            'react-native': 'react-native-web',
        },
        modules: ['web_modules', 'node_modules'],
    },
};
