---
sidebar: auto
---
# 安全

很多人不理解 markdown 的不太在意安全的格式。在许多情况下，你必须将输出传递给消毒液(sanitizers)。`markdown-it` 提供 2 种可能的安全生产策略：

1. 不要启用 HTML。用[插件](https://www.npmjs.org/browse/keyword/markdown-it-plugin) 扩展标签的功能。我们认为这是最好的选择，默认情况下会使用它。
   - 99% 的用户需求就可以满足。
   - 如果没有消毒液，输出也是安全的。
2. 启用 HTML 并使用拓展的消毒剂第三方包。

默认情况下，`markdown-it` 会禁止使用某种链接，这是可用的。

对于 XSS：

- `javascript:`，`vbscript:`
- `file:`
- `data:`，除了一些图像（GIF／PNG/JPEG/WebP）。

因此，默认的 `markdown-it` 理应是安全的。我们是关心它的。

如果你发现一个安全问题 - 通过 tracker 或电子邮件联系我们。这些报告被固定为优先级最高。

## 插件

通常，插件使用标记化的内容操作，这就足以提供安全输出。

但有一个不明显的情况，你应该知道 - 不允许插件生成任意元素 `id` 和 `name`。如果这些取决于用户输入 - 建议添加前缀以避免 DOM 阻塞。参考[讨论](https://github.com/markdown-it/markdown-it/issues/28)获取更多细节。

所以，如果你决定使用插件来添加拓展的类语法或者自动生成标题锚点，小心一点。