const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
        publicPath: 'public/',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets/',
                            name: '[name].[contenthash].[ext]',
                        },
                    },
                ],
            },
        ]
    },
    performance: {
        hints: 'warning',
        maxAssetSize: 512000, // Adjust size as needed
        maxEntrypointSize: 512000,
    }
};
