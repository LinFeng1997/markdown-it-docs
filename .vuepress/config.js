const path = require('path')
module.exports = {
  port: 3100,
  title: 'markdown-it 中文文档',
  description: '',
  themeConfig: {
    nav: [
      {key: '/architecture.md', label: '架构', link: '/architecture.md', text: '架构'},
      {key: '/development.md', label: '开发者建议', link: '/development.md', text: '开发者建议'}, {
      key: '/security.md', label: '安全', link: '/security.md', text: '安全'},
      {text: '印记中文', link: 'https://docschina.org/'},
    ],
    sidebar: ['/', '/api/Core.md', '/api/MarkdownIt.md', '/api/ParserBlock.md', '/api/ParserInline.md', '/api/Renderer.md', '/api/Ruler.md', '/api/Token.md'],
  },
  'less': {'javascriptEnabled': true},
  head: [
    ['script', {
      src: `/js/baidu.js`,
    }],
  ],
}
