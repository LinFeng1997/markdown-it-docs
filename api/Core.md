# Core

[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_core.js#L7)

<Badge text="内部的"/>

### 说明
顶层规则执行器。粘合块/内联的解析器，并进行中间(过程)的转换。

### 构造器
[new Core](#core-new)

### 类方法
[process](#core-process)

### 实例属性
[ruler](#core-ruler)

## Core.new
[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_core.js#L26)

```js
new Core()
```

## Core.process
[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_core.js#L45)

```js
Core.process(state)
```

执行核心的链式规则。

## Core#ruler
[源代码](https://github.com/markdown-it/markdown-it/blob/master/lib/parser_core.js#L32)

```js
Core#ruler -> Ruler
```

[Ruler](./Ruler.html#ruler) 实例。维持核心规则的配置。