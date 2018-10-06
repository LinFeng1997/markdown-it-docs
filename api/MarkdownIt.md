# MarkdownIt
[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L118)

### 说明
主要的解析器/渲染器类。

### 用法
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

单行渲染，没有段落包裹：
```js
var md = require('markdown-it')();
var result = md.renderInline('__markdown-it__ rulezz!');
```

### 构造器
[new MarkdownIt](https://markdown-it.github.io/markdown-it/#MarkdownIt.new "new MarkdownIt (constructor)")

### 类方法
[configure](https://markdown-it.github.io/markdown-it/#MarkdownIt.configure "MarkdownIt.configure (class method)"), [disable](https://markdown-it.github.io/markdown-it/#MarkdownIt.disable "MarkdownIt.disable (class method)"), [enable](https://markdown-it.github.io/markdown-it/#MarkdownIt.enable "MarkdownIt.enable (class method)"), [parse](https://markdown-it.github.io/markdown-it/#MarkdownIt.parse "MarkdownIt.parse (class method)"), [parseInline](https://markdown-it.github.io/markdown-it/#MarkdownIt.parseInline "MarkdownIt.parseInline (class method)"), [render](https://markdown-it.github.io/markdown-it/#MarkdownIt.render "MarkdownIt.render (class method)"), [renderInline](https://markdown-it.github.io/markdown-it/#MarkdownIt.renderInline "MarkdownIt.renderInline (class method)"), [set](https://markdown-it.github.io/markdown-it/#MarkdownIt.set "MarkdownIt.set (class method)"), [use](https://markdown-it.github.io/markdown-it/#MarkdownIt.use "MarkdownIt.use (class method)")

### 实例方法
[normalizeLink](https://markdown-it.github.io/markdown-it/#MarkdownIt.prototype.normalizeLink "MarkdownIt#normalizeLink (instance method)"), [normalizeLinkText](https://markdown-it.github.io/markdown-it/#MarkdownIt.prototype.normalizeLinkText "MarkdownIt#normalizeLinkText (instance method)"), [validateLink](https://markdown-it.github.io/markdown-it/#MarkdownIt.prototype.validateLink "MarkdownIt#validateLink (instance method)")

### 实例属性
[block](https://markdown-it.github.io/markdown-it/#MarkdownIt.prototype.block "MarkdownIt#block (instance property)"), [core](https://markdown-it.github.io/markdown-it/#MarkdownIt.prototype.core "MarkdownIt#core (instance property)"), [helpers](https://markdown-it.github.io/markdown-it/#MarkdownIt.prototype.helpers "MarkdownIt#helpers (instance property)"), [inline](https://markdown-it.github.io/markdown-it/#MarkdownIt.prototype.inline "MarkdownIt#inline (instance property)"), [linkify](https://markdown-it.github.io/markdown-it/#MarkdownIt.prototype.linkify "MarkdownIt#linkify (instance property)"), [renderer](https://markdown-it.github.io/markdown-it/#MarkdownIt.prototype.renderer "MarkdownIt#renderer (instance property)"), [utils](https://markdown-it.github.io/markdown-it/#MarkdownIt.prototype.utils "MarkdownIt#utils (instance property)")

## MarkdownIt.new
[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L221)

```js
new MarkdownIt([presetName][, options])
```

* **presetName** *(String)* -- 可选的，`commonmark` / `zero` 
* **options** *(Object)*

用给定的配置创建解析器实例。可以不调用 “new”。

##### 预设配置名

MarkdownIt 提供命名的预设（配置），以便快速启用/禁用常用语法规则和选项。

*   ["commonmark"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/commonmark.js) - 将解析器配置为严格的 [CommonMark](http://commonmark.org/) 模式。
*   [default](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/default.js) - 类似于 GFM，在没有给出预设名称时会启用，（包括）所有可用的规则，但仍然没有 html(支持 html), typographer(印刷意义上的美化) 和 autolinker(自动识别和转换像 url 的文本)。
*   ["zero"](https://github.com/markdown-it/markdown-it/blob/master/lib/presets/zero.js) - 所有的规则都被禁用。通过 `.enable()` 快速设置你的配置是比较好的。例如，当你只需要 `bold` 和 `italic` 标签时，什么(多余的功能)也不需要。

##### 选项

*   **html** - `false`。设成 `true` 来启用在源码中(支持) HTML 标签。注意！这是不安全的！你可能需要额外的消毒剂(sanitizer)来组织来自 XSS 的输出。最好是通过插件来扩展特性，而不是启用 HTML。
*   **xhtmlOut** - `false`。设成 `true` 来给闭合的单个标签（`<br />`）添加 '/'。只有完全兼容 CommonMark 模式时才需要这样做。实际上你只需要 HTML 输出。
*   **breaks** - `false`。 设成 `true` 来转化段落里的 `\n` 成 `<br>`。
*   **langPrefix** - `language-`。 给围栏代码块的 CSS 语言类前缀。对拓展的高亮器来说很有用。
*   **linkify** - `false`。设成 `true` 来自动转化像 URL 的文本成链接。
*   **typographer** - `false`。设成 `true` 来启用[某些语言中性的替换](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/replacements.js)以及引号的美化（智能引号）。
*   **quotes** - `“”‘’`, String 或 Array 类型。在 typographer 启用和支持智能引号时，进行双引号 + 单引号对替换。 比方说，你可以支持 '«»„“' 给俄罗斯人使用， '„“‚‘'  给德国人使用。还有 ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] 给法国人使用（包括 nbsp）。
*   **highlight** - `null`。高亮函数，给围栏代码块(使用)的。高亮器 `function (str, lang)` 会返回转义后的 HTML。如果源码不需要额外的改变和转义，它也会返回空的字符串。如果结果以 `<pre...` 开头，内部的包裹会被忽略。

##### 示例

```js
// commonmark 模式
var md = require('markdown-it')('commonmark');

// default 模式
var md = require('markdown-it')();

// 启用所有(可用的规则)
var md = require('markdown-it')({
  html: true,
  linkify: true,
  typographer: true
});
```

语法高亮

```js
var hljs = require('highlight.js') // https://highlightjs.org/

var md = require('markdown-it')({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str, true).value;
      } catch (__) {}
    }

    return ''; // 使用额外的默认转义
  }
});
```

或者伴随着完全包裹的覆盖（如果你需要复制 css 类到 `<pre>` 的话）：

```js
var hljs = require('highlight.js') // https://highlightjs.org/

// 实际的默认值们
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

## MarkdownIt.configure

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L386)

<Badge text="链式的"/>
<Badge text="内部的"/>

```js
MarkdownIt.configure(presets)
```

所有选项和编译设置的批量加载。这是个内部方法，你可能并不需要它。但你不妨看看[这里](https://github.com/markdown-it/markdown-it/tree/master/lib/presets)可用的预设和数据结构。

我们强烈建议使用预设(配置)而不是直接加载配置。这将对下一个版本提供更好的兼容性。

## MarkdownIt.disable

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L458)

<Badge text="链式的"/>

* **list** *(String|Array)* -- 要启用的规则名称或规则名称列表。
* **ignoreInvalid** *(Boolean)* -- 设为 `true` 来忽略规则未发现时的错误。

类似 [MarkdownIt.enable](https://markdown-it.github.io/markdown-it/#MarkdownIt.enable)，但用于禁用指定的规则们。

## MarkdownIt.enable

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L430)

<Badge text="链式的"/>

```js
MarkdownIt.enable(list, ignoreInvalid)
```

* **list** *(String|Array)* -- 要启用的规则名称或规则名称列表。
* **ignoreInvalid** *(Boolean)* -- 设为 `true` 来忽略规则未发现时的错误。

启用 list 或 rules。它会自动找到合适的部件，包含给定名称的规则。如果没有找到规则，并且 `ignoreInvalid` 没有设置，就会抛出异常。

##### 示例

```js
var md = require('markdown-it')()
            .enable(['sub', 'sup'])
            .disable('smartquotes');
```

## MarkdownIt.parse

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L516)

<Badge text="内部的"/>

```js
MarkdownIt.parse(src, env) -> Array
```

* **src** *(String|Array)* -- 源代码的字符串
* **env** *(Object)* -- (运行)环境沙箱

解析输入字符串并返回块(类型)的 token 列表（特殊的 token 类型“内联”将包含内联 token 列表）。如果你没有编写自定义渲染器（例如，生成 AST）的打算，不建议直接调用此方法。

`env` 用于在“分布式”规则之间传递数据，并返回渲染器所需的附加元数据，比如引用信息。它也能用于特定情况下的注入数据。通常，你可以通过`{}`，将更新后的对象传递给渲染器。

## MarkdownIt.parseInline

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L556)

<Badge text="内部的"/>

```js
MarkdownIt.parseInline(src, env) -> Array
```
* **src** *(String|Array)* -- 源代码的字符串
* **env** *(Object)* -- (运行)环境沙箱

类似于 [MarkdownIt.parse](https://markdown-it.github.io/markdown-it/#MarkdownIt.parse "MarkdownIt.parse (class method)") 但是会忽略所有块规则。它返回一个 token 列表，该列表包含一个单独的 `inline` 元素，其中包含在 `children` 属性中解析的内联 token 们。它也会更新 `env` 对象。

## MarkdownIt.render

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L540)

```js
MarkdownIt.render(src[, env]) -> String
```

* **src** *(String|Array)* -- 源代码的字符串
* **env** *(Object)* -- (运行)环境沙箱

将 markdown 字符串转换为 HTML。它对你来说肯定是最有魔力的：

`env` 可用于注入附加的元数据（默认情况下为 `{}`）。但你大概率用不到它，参考在 [MarkdownIt.parse](https://markdown-it.github.io/markdown-it/#MarkdownIt.parse "MarkdownIt.parse (class method)") 里的注释。 

## MarkdownIt.renderInline

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L574)

<Badge text="内部的"/>

* **src** *(String|Array)* -- 源代码的字符串
* **env** *(Object)* -- (运行)环境沙箱

类似于 [MarkdownIt.render](https://markdown-it.github.io/markdown-it/#MarkdownIt.render "MarkdownIt.render (class method)")，但对于单个段落的内容，(渲染的)结果不会被 `<p>` 标签包裹。

## MarkdownIt.set

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L370)

<Badge text="链式的"/>

设置解析器选项（与构造函数中的格式相同）。可能你永远都用不着它，但是你可以在构造函数调用之后更改选项。

##### 示例
```js
var md = require('markdown-it')()
            .set({ html: true, breaks: true })
            .set({ typographer, true });
```

**注意：** 为了获得最好的性能，不要匆忙地修改一个 `markdown-it` 实例选项。如果需要多个配置，最好创建多个实例，并用单独的配置初始化每个实例。

## MarkdownIt.use

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L494)

<Badge text="链式的"/>

将指定的插件加载到当前的解析器实例中。这只是一个语法糖，和调用 `plugin(md, params)` 等效。

##### 示例

```js
var iterator = require('markdown-it-for-inline');
var md = require('markdown-it')()
            .use(iterator, 'foo_replace', 'text', function (tokens, idx) {
              tokens[idx].content = tokens[idx].content.replace(/foo/g, 'bar');
            });

```

## MarkdownIt#normalizeLink

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L315)

```js
MarkdownIt#normalizeLink(url) -> String
```

用于将链接 URL 编码为机器可读(machine-readable)格式的函数，包括 url 编码、punycode 等。

## MarkdownIt#normalizeLinkText

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L322)

```js
MarkdownIt#normalizeLinkText(url) -> String
```

用于将链接 URL 解码为人类可读格式(human-readable)的函数。

## MarkdownIt#validateLink

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L307)

```js
MarkdownIt#validateLink(url) -> Boolean
```

链接校验函数。CommonMark 模式允许链接过多。默认情况下，我们禁用 `javascript:`，`vbscript:`，`file:` schemas，以及几乎所有的 `data:...`schemas，除了一些嵌入式图像类型。

你可以改变这种行为：

```js
var md = require('markdown-it')();
// 启用所有(可用的功能)
md.validateLink = function () { return true; }
```

## MarkdownIt#block

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L249)

```js
MarkdownIt#block -> ParserBlock
```

[ParserBlock](https://markdown-it.github.io/markdown-it/#ParserBlock "ParserBlock (class)") 的实例。当编写插件时，你可能用它来添加新规则。对于简单的规则控制，可以使用 [MarkdownIt.disable](https://markdown-it.github.io/markdown-it/#MarkdownIt.disable "MarkdownIt.disable (class method)") 和 [MarkdownIt.enable](https://markdown-it.github.io/markdown-it/#MarkdownIt.enable "MarkdownIt.enable (class method)")。

## MarkdownIt#core

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L258)

```js
MarkdownIt#core -> Core
```

[Core](https://markdown-it.github.io/markdown-it/#Core "Core (class)") 的链式调用实例。

## MarkdownIt#helpers

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L341)

```js
MarkdownIt#helpers -> helpers
```

链接组件解析函数，对编写插件大有裨益。详情见[此处](https://github.com/markdown-it/markdown-it/blob/master/lib/helpers)。

## MarkdownIt#inline

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L240)

```js
MarkdownIt#inline -> ParserInline
```

[ParserInline](https://markdown-it.github.io/markdown-it/#ParserInline "ParserInline (class)")的实例。当编写插件时，你可能用它来添加新规则。对于简单的规则控制，可以使用 [MarkdownIt.disable](https://markdown-it.github.io/markdown-it/#MarkdownIt.disable "MarkdownIt.disable (class method)") 和 [MarkdownIt.enable](https://markdown-it.github.io/markdown-it/#MarkdownIt.enable "MarkdownIt.enable (class method)")。

## MarkdownIt#linkify

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L290)

```js
MarkdownIt#linkify -> LinkifyIt
```

[linkify-it](https://github.com/markdown-it/linkify-it) 的实例，用于 [linkify](https://github.com/markdown-it/markdown-it/blob/master/lib/rules_core/linkify.js) 规则。

## MarkdownIt#renderer

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L281)

```js
MarkdownIt#renderer -> Renderer
```

[Renderer](https://markdown-it.github.io/markdown-it/#Renderer "Renderer (class)") 的实例。使用它来修改输出的外观。或者为插件生成的新 token 类型添加渲染规则。

##### 示例

```js
var md = require('markdown-it')();

function myToken(tokens, idx, options, env, self) {
  //...
  return result;
};

md.renderer.rules['my_token'] = myToken

```

参考 [Renderer](https://markdown-it.github.io/markdown-it/#Renderer "Renderer (class)") 文档和[源码](https://github.com/markdown-it/markdown-it/blob/master/lib/renderer.js)。

## MarkdownIt#utils

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/index.js#L333)

```js
MarkdownIt#utils -> utils
```

各种实用的函数，用于编写插件。详情见[此处](https://github.com/markdown-it/markdown-it/blob/master/lib/common/utils.js)。