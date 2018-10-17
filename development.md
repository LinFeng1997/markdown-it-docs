---
sidebar: auto
---
# 开发者建议

在继续之前，确保你已经阅读：

1. [README](https://github.com/markdown-it/markdown-it#markdown-it)
2. [API 文档](./)
3. [架构说明](architecture.md)


## 对插件的一般性考虑

1. 尝试为插件规则找到正确的位置：
  - 它会与现有的标签（优先级）冲突吗？
    - 如果是的话，你需要写一个内联或块规则。
    - 如果没有 - 你可以改变核心链中的 token。
  - 记住，核心链中的 token 变换总是比编写更简单。
    - 块或内联规则

      如果你不复制现有的规则。然而，块和内联规则通常更快。
  - 有时，仅修改渲染器就足够了。例如，添加标题 ID 或给链接添加 `target="_blank"`。
  - 插件不应该要求 `markdown-it` 包作为包 `package.json` 中的依赖项。
    如果需要访问内部实体，则可以通过解析器实例获得这些信息，通过插件加载。请参考主类和嵌套对象的属性。
2. 搜索现有的插件
   [插件](https://www.npmjs.org/browse/keyword/markdown-it-plugin)或[规则](https://github.com/markdown-it/markdown-it/tree/master/lib)其实做类似的事情。修改现有代码可以更简单，而不是从头开始编写。
  
3. 如果你做了所有的步骤，但仍然有问题-问 [tracker](https://github.com/markdown-it/markdown-it/issues)。但是，请注意：
   - 具体点。诸如“如何做插件”之类的通用问题，“如何学习编程”是不被待见的。
   - 不要要求我们打破 [CommonMark](http://commonmark.org/) 规范。
     这样的事情应该首先在 [CommonMark 论坛](http://talk.commonmark.org/) 讨论。


## NPM 软件包的注释

简化搜索：

- 给插件的 `package.json` 添加关键字 `markdown-it` 和 `markdown-it-plugin` 。
- 为其他相关的包添加关键字 `markdown-it`。


## FAQ


#### 我需要一个异步规则，该怎么做？

抱歉。你不能直接做这件事。所有复杂的解析器本质上是同步的。但是你可以使用如下解决方案：

1. 在解析阶段，用随机数替换内容，并将其存储在 `env` 中。
2. 对收集的数据进行异步处理。
3. 渲染内容并用文本替换这些随机数字；或者替换第一个，然后渲染。

或者，你可以渲染成 HTML，然后将其解析为 DOM，抑或 [cheerio](https://github.com/cheeriojs/cheerio) AST，并用更方便的方式应用转变。


#### 如何用链接替换文本标记的一部分？

正确的顺序是将文本拆分为几个 token 并在其间添加链接 token。

结果将是：`text` + `link_open` + `text` + `link_close` + `text`。

参考 [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js) 和 [emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/replace.js) 的实现- 它们执行文本 token 分割。

__注意.__ 不要用 HTML 标签替换文本！那不安全。


#### 为什么不执行我的内联规则？

内联解析器跳过了文本片段以便优化速度。它只在[一小组字符](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_inline/text.js)上驻足，这可以是 tokens 。由于性能原因，我们没有将此列表扩展。

如果你绝对确信那里缺少了重要的东西 - 创建一个 ticket，我们会考虑把它作为一个新的字符。


#### 你为什么拒绝一些有用的东西？

我们做的是一个 markdown 解析器。它应该保持“markdown 精神”。其他事情应该隔离。例如插件。抱歉，我们没有明确的标准。

也许，你会发现 [CommonMark 论坛](http://talk.commonmark.org/)是一个有用的读物，从而更好地理解我们。

当然，如果你觉得对另一种标签的类型来说，这个解析器的架构你很感兴趣，欢迎你在另一个项目中重用它。