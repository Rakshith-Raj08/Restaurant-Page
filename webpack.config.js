const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        },
    ],
},
  plugins:[
    new htmlwebpackplugin({
        template: './src/index.html' , 
        filename: 'index.html',
        title: 'resturant page' ,
        inject: 'body' , 
    })
  ],
  devServer: {
    static: {
        directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9000,
},
mode: 'development',
};