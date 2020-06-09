const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'hello.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'我爱学习',
            template:'./index.html'
        })
    ]
}