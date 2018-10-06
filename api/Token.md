## Token

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L9)

### 构造器

*   [new Token](https://markdown-it.github.io/markdown-it/#Token.new "new Token (constructor)")

### 类方法
[attrGet](https://markdown-it.github.io/markdown-it/#Token.attrGet "Token.attrGet (class method)"), [attrIndex](https://markdown-it.github.io/markdown-it/#Token.attrIndex "Token.attrIndex (class method)"), [attrJoin](https://markdown-it.github.io/markdown-it/#Token.attrJoin "Token.attrJoin (class method)"), [attrPush](https://markdown-it.github.io/markdown-it/#Token.attrPush "Token.attrPush (class method)"), [attrSet](https://markdown-it.github.io/markdown-it/#Token.attrSet "Token.attrSet (class method)")

### 实例属性
[attrs](https://markdown-it.github.io/markdown-it/#Token.prototype.attrs "Token#attrs (instance property)"), [block](https://markdown-it.github.io/markdown-it/#Token.prototype.block "Token#block (instance property)"), [children](https://markdown-it.github.io/markdown-it/#Token.prototype.children "Token#children (instance property)"), [content](https://markdown-it.github.io/markdown-it/#Token.prototype.content "Token#content (instance property)"), [hidden](https://markdown-it.github.io/markdown-it/#Token.prototype.hidden "Token#hidden (instance property)"), [info](https://markdown-it.github.io/markdown-it/#Token.prototype.info "Token#info (instance property)"), [level](https://markdown-it.github.io/markdown-it/#Token.prototype.level "Token#level (instance property)"), [map](https://markdown-it.github.io/markdown-it/#Token.prototype.map "Token#map (instance property)"), [markup](https://markdown-it.github.io/markdown-it/#Token.prototype.markup "Token#markup (instance property)"), [meta](https://markdown-it.github.io/markdown-it/#Token.prototype.meta "Token#meta (instance property)"), [nesting](https://markdown-it.github.io/markdown-it/#Token.prototype.nesting "Token#nesting (instance property)"), [tag](https://markdown-it.github.io/markdown-it/#Token.prototype.tag "Token#tag (instance property)"), [type](https://markdown-it.github.io/markdown-it/#Token.prototype.type "Token#type (instance property)")

## Token.new

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L15)

```js
new Token(type, tag, nesting)
```

创建新的 token 并填充传递的属性。

## Token.attrGet

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L171)

```js
Token.attrGet(name)
```

获取属性 `name` 的值，如果不存在，则为 null。

## Token.attrIndex

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L121)

```js
Token.attrIndex(name) -> Number
```

按名称搜索属性索引。

## Token.attrJoin

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L186)

```js
Token.attrJoin(name, value)
```

通过间隔将值添加到现有属性中。如果(这个值)不存在，用来创建新属性，token 类的操作很有用。

## Token.attrPush

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L140)

```js
Token.attrPush(attrData)
```

将 `[ name, value ]` 的属性添加到列表中。必要时初始化。

## Token.attrSet

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L154)

```js
Token.attrSet(name, value)
```

将 `name` 属性设置为 `value`。如果(旧值)存在，则重写旧值。

## Token#attrs

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L35)

```js
Token#attrs -> Array
```

HTML 属性。格式：`[ [ name1, value1 ], [ name2, value2 ] ]`。

## Token#block

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L104)

```js
Token#block -> Boolean
```

对于块级 token 来说为 true，对于 inline 令牌来说为 false。在渲染器中用于计算换行。

## Token#children

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L67)

```js
Token#children -> Array
```

子节点数组（内联和图片 token）

## Token#content

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L75)

```js
Token#content -> String
```

在自闭合标签（code、html、fence 等）的情况下，它可以获取这个标签的内容。

## Token#hidden

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L112)

```js
Token#hidden -> Boolean
```

如果设为 true，渲染时会忽略这个元素。用于在紧凑的列表隐藏段落。

## Token#info

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L89)

```js
Token#info -> String
```

围栏(代码块)信息字符串

## Token#level

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L60)

```js
Token#level -> Number
```

嵌套的级别，与 `state.level` 相同

## Token#map

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L42)

```js
Token#map -> Array
```

源映射信息。格式：`[ line_begin, line_end ]`。

## Token#markup

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L82)

```js
Token#markup -> String
```

'\*' 或 '\_' (形式)的强调，围栏(代码)字符串等。

## Token#meta

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L96)

```js
Token#meta -> Object
```

一个给插件用于存储任意数据的地方。

## Token#nesting

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L53)

```js
Token#nesting -> Number
```

级别变化（-1, 0, 1），其中：
*   `1` 意味着标签打开。
*   `0` 意味着标签是自动关闭的。
*   `-1` 意味着标签正在关闭。

## Token#tag

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L28)

```js
Token#tag -> String
```

HTML 标签名，例如 “p”。

## Token#type

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/token.js#L21)

```js
Token#type -> String
```

token 的类型（字符串，例如 "paragraph_open"）。