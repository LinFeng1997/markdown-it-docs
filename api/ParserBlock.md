## ParserBlock

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_block.js#L6)

<Badge text="内部的"/>

### 说明

块级别的 tokenizer。

### 构造器

*   [new ParserBlock](#parserblock-new "new ParserBlock (constructor)")

### 类方法

*   [parse](#parserblock-parse "ParserBlock.parse (class method)")

### 实例属性

*   [ruler](#parserblock-ruler "ParserBlock#ruler (instance property)")

## ParserBlock.new

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_block.js#L32)

```js
new ParserBlock()
```

## ParserBlock.parse

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_block.js#L108)

```js
ParserBlock.parse(str, md, env, outTokens)
```

处理输入字符串和推入块级别的 token 到 `outTokens`

## ParserBlock#ruler

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_block.js#L38)

```js
ParserBlock#ruler -> Ruler
```

[Ruler](./Ruler.html "Ruler (class)") 实例。维持块规则的配置。