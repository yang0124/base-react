# 一、认识antDesign组件库
[文档](https://ant.design/index-cn)

1. 安装antd组件库
```
npm i antd -S
```

2. 在项目的入口index.js中引入antd的样式文件
```
import '../node_modules/antd/dist/antd.css';
```

3. 在自己的业务组件中，按需引入antd组件并使用
```
import React from 'react';
import { Button } from 'antd'

function App() {
  return (
    <div className="App">
      <Button type="primary">按钮</Button>
    </div>
  );
}

export default App;

```

# 二、项目目录规划方式

---components 公共组件
---request  请求数据的模块
---routes   路由对应关系数据包
---views    业务组件


# 三、使用antD组件汇总

1. Layout 相关

2. Menu  组件

3. Table  注意其中的两种数据包的用途及其格式

4. Spin  加载动画

5. Popconfirm  二次确认气泡