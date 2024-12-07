const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './js/dashboard_main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            inject: true
        })
    ],
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
                    filename: 'assets/[name][contenthash].[ext]'
                }
            }
        ]
    },
    performance: {
        maxAssetSize: 1000000,  // Example: 1MB - adjust this based on your asset sizes
        maxEntrypointSize: 1000000,
        hints: 'warning'
    }
};
