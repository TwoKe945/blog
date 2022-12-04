import { parse, traverse, generator } from './utils'
import i from '@babel/types'
const code =`
import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  // { text: "快速导航", icon: "navigation", link: "/quicknav/" },
  { text: "代码笔记", icon: "code", link: "/codenotes/" },
  { text: "工具杂记", icon: "note", link: "/utils/" },
  { text: "浮生杂记", icon: "note", link: "/floatinglife/" },
  // { text: "开源项目", icon: "free", link: "/projects/" },
]);
`;

const ast = parse(code, { sourceType: 'module' })

traverse(ast, {
  ArrayExpression(path) {
    if ((path.node as any).__update) return;
    const newObjectExpression = i.objectExpression([
      i.objectProperty(i.identifier('text'), i.stringLiteral('默认博客题目')),
      i.objectProperty(i.identifier('icon'), i.stringLiteral('note')),
      i.objectProperty(i.identifier('link'), i.stringLiteral(`/new_blog_1/`))
    ])
    const newArrayExpression = i.arrayExpression([...path.node.elements, newObjectExpression]);
    (newArrayExpression as any).__update = true
    path.replaceWith(newArrayExpression)
  }
})

const target = (generator as any).default(ast)
