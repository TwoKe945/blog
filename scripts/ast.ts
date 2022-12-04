import { parse, traverse, generator, nodeNnv } from './utils'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path';
import i from '@babel/types'
const { __dirname, __filename } = nodeNnv(import.meta.url)

export function insertBlogDir(title: string, blogPath: string, idx: number = undefined as any,icon: string = 'note') {
  const navbarConfigPath = resolve(__dirname, "../src/.vuepress/navbar/zh.ts");
  const code = readFileSync(navbarConfigPath).toString();

  const ast = parse(code, { sourceType: 'module' })

  traverse(ast, {
    ArrayExpression(path) {
      if ((path.node as any).__update) return;
      const newObjectExpression = i.objectExpression([
        i.objectProperty(i.identifier('text'), i.stringLiteral(title)),
        i.objectProperty(i.identifier('icon'), i.stringLiteral(icon)),
        i.objectProperty(i.identifier('link'), i.stringLiteral(`/${blogPath}/`))
      ])
      const newArrayExpression = i.arrayExpression([...path.node.elements.slice(0, idx), newObjectExpression, ...(idx ? path.node.elements.slice(idx) : [])]);
      (newArrayExpression as any).__update = true
      path.replaceWith(newArrayExpression)
    }
  })
  const target = generator(ast)
  writeFileSync(navbarConfigPath, target.code, {
    encoding: 'utf8'
  })
}
