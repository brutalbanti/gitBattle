const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './src/index.js', // пробегаемся по указанному файлу
    output: {
        path: path.resolve(__dirname, 'dist'), // создаём папку dist
        filename: "bundle.js", // в папке dist создаём файлі bundle.js и компилируем то, что в index.js
        publicPath: "/",
    },
    module: {
        rules: [
            {test: /\.(js)$/, use: 'babel-loader'},
            {test: /\.(css)$/, use: ['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }) 
    ]
}

