module.exports = {
  "themeConfig": {
    "sidebar": ["/", "/api/Core.md", "/api/MarkdownIt.md", "/api/ParserBlock.md", "/api/ParserInline.md", "/api/Renderer.md", "/api/Ruler.md", "/api/Token.md"],
    "nav": [{
      "key": "/architecture.md",
      "label": "架构",
      "link": "/architecture.md",
      "text": "架构"
    },
      {
        "key": "/development.md",
        "label": "开发者建议",
        "link": "/development.md",
        "text": "开发者建议"
      }, {
        "key": "/security.md",
        "label": "安全",
        "link": "/security.md",
        "text": "安全"
      }
    ]
  },
  "less": {"javascriptEnabled": true},
  "dest": "/Users/xuyunfeng/Desktop/play/markdown-it/.vuepress/markdown-it",
  "title": "markdown-it",
  head: [
    ['script', {
      src: `/baidu.js`
    }]
  ]
}