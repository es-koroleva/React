const HtmlWebpackPlugin = require('html-webpack-plugin');
const {cleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');
module.exports = {
    entry: '/src/index.js',                      //точка входа, откуда будет запускаться проект

    output: {
        path:path.resolve(__dirname, 'dist'),    //директория, где будет располагаться итоговый бандл
            clean: true,                         //очищение директории перед обнавлением бандла
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, '/src/template.html'),
            filename: 'index.html',
        }),
        new cleanWebpackPlugin(),
    ]
};