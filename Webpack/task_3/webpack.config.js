const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        static: './public',
        port: 8564,
        open: true  // Automatically opens the browser
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Holberton Dashboard',
        filename: 'index.html',
        template: 'src/index.html', // Make sure this path is correct
        inject: true
    }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devtool: 'inline-source-map',
};
