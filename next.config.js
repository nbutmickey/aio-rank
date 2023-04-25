const withLess = require('next-with-less');
const webpack = require('./config/webpack.config');

// const dev = process.env.NODE_ENV !== 'production';
const nextConfig = {
    // cssModules: true,
    reactStrictMode: true,
    // cssLoaderOptions: {
    //     importLoaders: 1,
    //     localIdentName: dev ? '[local]___[hash:base64:5]' : '[hash:base64:5]',
    // },
    swcMinify: true,
    compress: true,
    distDir: 'dist',
    assetPrefix: process.env.STATIC_PATH_PREFIX,
    webpack,eslint: {
        ignoreDuringBuilds: true
    },
    typescript: {
        ignoreBuildErrors: true
    },
    transpilePackages: ['@douyinfe/semi-ui', '@douyinfe/semi-icons', '@douyinfe/semi-illustrations'],
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
};


module.exports = withLess(nextConfig);
