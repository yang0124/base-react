# 一、webpack
> 打包工具
> .vue ，JSX，import模块化等，新兴语法，浏览器并不能直接支持
> webpack等可以协助我们完成新兴语法的编译

[官网](https://www.webpackjs.com/)

自己从零构建一个React的运行环境
先在代码写高级语法---> 运行至浏览器 ---> 报错 ---> 使用webpack解决报错 ---> 掌握webpack的使用


# 二、webpack安装流程
> webpack4.0
1. 在项目目录下进行npm初始化
```
npm init
```

2. 安装webpack 与 webpack-cli
```
cnpm i webpack -D
cnpm i webpack-cli -D
```

3. 在项目根目录下新建webpack.config.js 配置文件
```
const path = require('path') //nodejs的文件夹路径处理模块
module.exports = {
    entry:'./src/index.js', //给webpack指定，需要被打包的文件
    output:{   //给webpack指定，打包之后结果相关的配置
        path:path.resolve(__dirname,'dist'), //打包结果的存放位置
        filename:'hello.js'  //打包后文件名称
    }
}
```

4. 在package.json文件的scripts选项下，新增一个能够运行webpack的命令
```
"scripts": {
    "dev": "webpack --config webpack.config.js"
},
```

5. 执行npm run dev dev命令，查看webpack打包结果


# 三、webpack插件机制
> 每个插件都会有个单一的使命，可以辅助webpack完成更多功能
> 例如：使用一个能够自动新建html文件，并引入打包后的js文件的插件
插件来源：webpack官方插件   npm平台上的第三方插件

[html-webpack-plugin文档](https://www.webpackjs.com/plugins/html-webpack-plugin/)

1. 安装插件
```
cnpm i html-webpack-plugin -D
```

2. 在webpack.config.js中引入插件并配置

```
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin') //【1】引入插件
module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'hello.js'
    },
    plugins:[
        new HtmlWebpackPlugin({ //【2】配置插件
            title:'我爱学习',
            template:'./index.html'
        })
    ]
}
```

3. 重新打包查看打包结果

# 四、Loader预编译
> 相当于翻译官的角色
> webpack在打包过程中可能会遇到各种各样的语法（React、ES6等）
> 需要Loader协助webpack来翻译这些语法

[babel-loader 官网](https://www.babeljs.cn/)

1. 在不适用Loader的情况下，让webpack打包React代码
报错：You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. 

2. 使用babel-loader解决这个报错

3. 安装babel-loader相关的基础包文件
[babel配置流程文档](https://www.babeljs.cn/setup#installation)
```
cnpm install --save-dev babel-loader @babel/core
```

4. 在webpack.config.js中新增loader相关规则
```
module.exports = {
    ...其他配置项...
    module:{
        rules: [ //配置loader相关的规则
            {    //翻译js文件代码的loader规则
                test: /\.js$/,    //使用正则匹配需要预编译的文件类型
                exclude: /node_modules/,  //把不需要预编译的文件路径排除在外
                loader: "babel-loader"   //指明采用哪种loader编译工具
            }
        ]
    }
}
```

5. 安装React预设包文件 （预先设定好的规则包）
> [babel的预设](https://www.babeljs.cn/docs/presets)
```
cnpm install --save-dev @babel/preset-react
```

6. 在项目根目录下创建.babelrc文件，用以做babel相关配置
> 例如：设置react的预设
```
{
    "presets": ["@babel/preset-react"]
}
```

7. 执行npm run dev 查看打包结果
> 打包成功  且  React代码可运行，说明babel配置成功

# 五、DevServer
> 开启本地开发服务器，监听代码变化，作出实时响应

1. 安装divServer模块
```
cnpm i webpack-dev-server -D
```

2. 在webpack.config.js中配置devServer
```
devServer:{
    port:8080,
    open:true
}
```

3. 在package.json中新增启动本地开发服务的npm命令
```
"scripts": {
    "build": "webpack --config webpack.config.js",
    "start": "webpack-dev-server --config webpack.config.js"
  },
```

4. 使用npm run start 启动本地服务，修改代码观察效果

# 六、其他配置项
> 将前面完成react-todo项目中的src目录与public目录迁移到webpack-demo中

## （1）其他js语法报错

1. 项目中其他语法编译报错
```
handleAdd=()=>{}
```
2. 安装一个babel插件
```
cnpm i @babel/plugin-proposal-class-properties -D
```

3. 在.babelrc配置文件中，配置第二步安装的插件
```
{
    "presets": ["@babel/preset-react"],
    "plugins": ["@babel/plugin-proposal-class-properties"]
}
```

## (2)css文件及代码编译报错

1. webpack打包过程中会提示我们使用css-loader
[css-loader的使用](https://www.npmjs.com/package/css-loader)
```
cnpm i style-loader css-loader -D
```

2. 在webpack.config.js 下的module/rules下，配置新的loader规则
```
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
}
```
3. 执行npm run start 查看项目运行效果