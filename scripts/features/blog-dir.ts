import { parse, traverse, generator, path } from '../utils'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path';
import { NodePath } from '@babel/traverse'
import i from '@babel/types'
const { __dirname, __filename } = path(import.meta.url)

export function insertBlogDir(title: string, blogPath: string, idx: number = undefined as any,icon: string = 'note') {
  const navbarConfigPath = resolve(__dirname, "../src/.vuepress/navbar/zh.ts");
  const code = readFileSync(navbarConfigPath).toString();

  const ast = parse(code, { sourceType: 'module' })

  traverse(ast, {
    ArrayExpression: nodePath => transfrom(nodePath, title, blogPath, idx, icon)
  })
  const target = generator(ast)
  writeFileSync(navbarConfigPath, target.code, {
    encoding: 'utf8'
  })
}


export function transfrom(nodePath: NodePath<i.ArrayExpression>, title: string, blogPath: string, idx: number = undefined as any,icon: string = 'note') {
  if ((nodePath.node as any).__update) return;
  const newObjectExpression = i.objectExpression([
    i.objectProperty(i.identifier('text'), i.stringLiteral(title)),
    i.objectProperty(i.identifier('icon'), i.stringLiteral(icon)),
    i.objectProperty(i.identifier('link'), i.stringLiteral(`/${blogPath}/`))
  ])
  const newArrayExpression = i.arrayExpression([...nodePath.node.elements.slice(0, idx), newObjectExpression, ...(idx !== undefined ? nodePath.node.elements.slice(idx) : [])]);
  (newArrayExpression as any).__update = true
  nodePath.replaceWith(newArrayExpression)
}
