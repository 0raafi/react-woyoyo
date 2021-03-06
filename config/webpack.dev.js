const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const paths = require('./paths.js');

module.exports = merge(common, {
    mode: 'development',

    devtool: 'inline-source-map',

    devServer: {
        historyApiFallback: true,
        open: false,
        compress: true,
        hot: true,
        port: 3000,
    },

    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_module/,
                use: [
                    {
                        loader: require.resolve('babel-loader'),
                        options: {
                            plugins: [
                                require.resolve('react-refresh/babel'),
                            ].filter(Boolean),
                        },
                    }
                ]
            },
        ],
    },
    plugins: [
        new Dotenv({
            path: paths.env + '/.env.development',
        }),
        new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
})
