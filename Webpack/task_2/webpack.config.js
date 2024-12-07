const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        clean: true,  // This ensures the output directory is cleaned between builds
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/[name][ext]'
                }
            }
        ]
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    }
};
