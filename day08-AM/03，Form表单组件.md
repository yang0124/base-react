# 一、Form表单相关

1. 表单验证功能的使用

2. 表单相关的方法(验证表单的方法，获取表单内容，设置表单默认值)


# 二、富文本编辑器的集成
> [wangEditor文档](http://www.wangeditor.com/)

1. 安装第三方富文本编辑器
```
npm i wangeditor -S
```

2. 在需要显示编辑器的地方，准备一个DOM节点，并通过createRef进行绑定


3. 引入wangeditor，并在componentDidMount中对其进行初始化

```
import wEditor from 'wangeditor'

let cont = this.editCont.current;
let editor = new wEditor(cont) //此处的editor就是富文本编辑器的实例对象
editor.create()
```

4. 动态获取富文本编辑器的内容

```
editor.txt.html()  //此处的editor就是富文本编辑器的实例对象
```

# 图片上传

1. 独立封装MyUpload组件

2. 引入antDesign的Upload组件并调整

3. 调整的位置

    + Upload组件标签配置项的  name  与 action
    + 调整了图片上传成功后的 handleChange

4. MyUpload组件上传图片成功后，如何把图片路径交付给Pub.js组件
> [注意复习]子组件传递数据给父组件的流程

