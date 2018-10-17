## ParserInline

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_inline.js#L6)

<Badge text="内部的"/>

### 说明

token 化段落内容。

### 构造器

*   [new ParserInline](#parserinline-new "new ParserInline (constructor)")

### 类方法

*   [parse](#parserinline-parse "ParserInline.parse (class method)")

### 实例属性

*   [ruler](#parserinline-ruler "ParserInline#ruler (instance property)"), [ruler2](#parserinline-ruler2 "ParserInline#ruler2 (instance property)")

## ParserInline.new

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_inline.js#L40)

```js
new ParserInline()
```

## ParserInline.parse

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_inline.js#L159)

```js
ParserInline.parse(str, md, env, outTokens)
```

处理输入字符串和推入内联 token 到 `outTokens`

## ParserInline#ruler

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_inline.js#L48)

```js
ParserInline#ruler -> Ruler
```

[Ruler](./Ruler.html "Ruler (class)") 实例。维持内联规则的配置。

## ParserInline#ruler2

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_inline.js#L60)

```js
ParserInline#ruler2 -> Ruler
```

[Ruler](./Ruler.html "Ruler (class)") 实例。用于后处理的第二标尺(second ruler)（例如强调规则）。