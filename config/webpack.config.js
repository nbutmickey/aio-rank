const path = require('path');
const webpack = require('webpack');
const resolve = dir => path.resolve(__dirname, '..', dir);

const getClientPlugins = () => {
    return [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        }),
    ];
};

const rules = [];
module.exports = (config, {isServer}) => {
    rules.forEach(rule => {
        config.module.rules.push(rule);
    });
    config.plugins = [...config.plugins, ...getClientPlugins({isServer})];
    config.resolve.alias = {
        ...config.resolve.alias,
    };
    if (!isServer) {
        config.resolve.fallback = {
            fs: false,
            cluster: false,
            os: false,
        };
    }
    return config;
};