const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'index.js'
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'我爱学习',
            template:'./public/index.html'
        })
    ],
    module:{
        rules: [ //配置loader相关的规则
            {    //翻译js文件代码的loader规则
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    devServer:{
        port:8080,
        open:true
    }
}