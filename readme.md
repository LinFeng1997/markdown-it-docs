# markdown-it

## 安装

**node.js** & **bower**:

```bash
npm install markdown-it --save
bower install markdown-it --save
```

**browser (CDN):**

- [jsDeliver CDN](http://www.jsdelivr.com/#!markdown-it "jsDelivr CDN")
- [cdnjs.com CDN](https://cdnjs.com/libraries/markdown-it "cdnjs.com")

## 用法示例

参考：

- [开发者信息](https://github.com/markdown-it/markdown-it/tree/master/docs) -
  为插件开发者准备。
	
### 简单用法

```js
// node.js, 用“类”的方式：
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');

// 还是 node.js, 但使用更爽的方式：
var md = require('markdown-it')();
var result = md.render('# markdown-it rulezz!');

// 没有 AMD 的浏览器环境，在 js 脚本加载时才添加到“window”
// 注意，“markdownit” 中没有破折号。
var md = window.markdownit();
var result = md.render('# markdown-it rulezz!');
```


单行渲染，不进行段落换行：

```js
var md = require('markdown-it')();
var result = md.renderInline('__markdown-it__ rulezz!');
```

### 带有预设和选项的初始化

(\*)预设(preset)定义了激活的规则以及选项的组合。可以是
`"commonmark"`，`"zero"` 或者 `"default"` （如果省略的话）。参考 [API 文档](https://markdown-it.github.io/markdown-it/#MarkdownIt.new) 获取更多细节。

```js
// commonmark 模式
var md = require('markdown-it')('commonmark');

// default 模式
var md = require('markdown-it')();

// 启用所有
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});

// 所有的选项列表（默认情况下）
var md = require('markdown-it')({
  html:         false,        // 在源码中启用 HTML 标签
  xhtmlOut:     false,        // 使用 '/' 来闭合单标签 （比如 <br />）。
                              // 这个选项只对完全的 CommonMark 模式兼容。
  breaks:       false,        // 转换段落里的 '\n' 到 <br>。
  langPrefix:   'language-',  // 给围栏代码块的 CSS 语言前缀。对于额外的高亮代码非常有用。
  linkify:      false,        // 将类似 URL 的文本自动转换为链接。

  // 启用一些语言中立的替换 + 引号美化
  typographer:  false,

  // 双 + 单引号替换对，当 typographer 启用时。
  // 或者智能引号等，可以是 String 或 Array。
  //
  // 比方说，你可以支持 '«»„“' 给俄罗斯人使用， '„“‚‘'  给德国人使用。
  // 还有 ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] 给法国人使用（包括 nbsp）。
  quotes: '“”‘’',

  // 高亮函数，会返回转义的HTML。
  // 或 '' 如果源字符串未更改，则应在外部进行转义。
  // 如果结果以 <pre ... 开头，内部包装器则会跳过。
  highlight: function (/*str, lang*/) { return ''; }
});
```

### 插件加载

```js
var md = require('markdown-it')()
            .use(plugin1)
            .use(plugin2, opts, ...)
            .use(plugin3);
```


### 语法高亮

使用 `highlight` 选项给围栏代码块应用语法高亮功能：

```js
var hljs = require('highlight.js'); // https://highlightjs.org/

// 通常的默认值们
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return ''; // 使用额外的默认转义
  }
});
```

或者使用完全的包裹器覆盖（如果你需要复制 class 到 `<pre>`）：

```js
var hljs = require('highlight.js'); // https://highlightjs.org/

// 通常的默认值们
var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' +
               hljs.highlight(lang, str, true).value +
               '</code></pre>';
      } catch (__) {}
    }

    return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
  }
});
```

### Linkify

`linkify: true` 使用 [linkify-it](https://github.com/markdown-it/linkify-it)。配置 linkify-it，通过 `md.linkify` 访问 linkify 实例：

```js
md.linkify.tlds('.py', false);  // 禁用 .py 作为顶级域
```

## 语法拓展

内嵌的（默认启用）：

- [表格](https://help.github.com/articles/organizing-information-with-tables/) (GFM)
- [删除线](https://help.github.com/articles/basic-writing-and-formatting-syntax/#styling-text) (GFM)

通过插件：

- [下标](https://github.com/markdown-it/markdown-it-sub)
- [上标](https://github.com/markdown-it/markdown-it-sup)
- [脚注](https://github.com/markdown-it/markdown-it-footnote)
- [定义列表](https://github.com/markdown-it/markdown-it-deflist)
- [缩写](https://github.com/markdown-it/markdown-it-abbr)
- [emoji](https://github.com/markdown-it/markdown-it-emoji)
- [自定义代码块](https://github.com/markdown-it/markdown-it-container)
- [插入](https://github.com/markdown-it/markdown-it-ins)
- [标记](https://github.com/markdown-it/markdown-it-mark)
- ... 以及[其他的](https://www.npmjs.org/browse/keyword/markdown-it-plugin)


### 管理规则

默认情况下，所有规则都已经启用，但可以通过选项进行限制。在插件上加载其所有规则都会自动启用。

```js
// 当前激活/禁用的规则
var md = require('markdown-it')()
            .disable([ 'link', 'image' ])
            .enable([ 'link' ])
            .enable('image');

// 启用所有
md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true,
});
```
