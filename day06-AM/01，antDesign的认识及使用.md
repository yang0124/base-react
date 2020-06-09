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