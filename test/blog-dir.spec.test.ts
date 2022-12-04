import { it, expect, describe } from 'vitest'
import { transfrom } from '../scripts/features/blog-dir'
import parse from '@babel/parser'
import traverse from '@babel/traverse'
import generator from '@babel/generator'

const code =
`import { navbar } from "vuepress-theme-hope";
export const zhNavbar = navbar([{
  text: "代码笔记",
  icon: "code",
  link: "/codenotes/"
}, {
  text: "工具杂记",
  icon: "note",
  link: "/utils/"
}, {
  text: "浮生杂记",
  icon: "note",
  link: "/floatinglife/"
}]);`;


function transfromCode(code: string, idx: number | undefined) {
  const ast = parse(code, { sourceType: 'module' })
  traverse(ast, {
    ArrayExpression: nodePath => transfrom(nodePath, "新博客目录", "new_blog", idx)
  })

  const target = generator(ast)
  return target.code;
}

describe('创建博客目录', function() {

  it('置于末尾', () => {
    expect(transfromCode(code, undefined)).toMatchInlineSnapshot(`
      "import { navbar } from \\"vuepress-theme-hope\\";
      export const zhNavbar = navbar([{
        text: \\"代码笔记\\",
        icon: \\"code\\",
        link: \\"/codenotes/\\"
      }, {
        text: \\"工具杂记\\",
        icon: \\"note\\",
        link: \\"/utils/\\"
      }, {
        text: \\"浮生杂记\\",
        icon: \\"note\\",
        link: \\"/floatinglife/\\"
      }, {
        text: \\"\\\\u65B0\\\\u535A\\\\u5BA2\\\\u76EE\\\\u5F55\\",
        icon: \\"note\\",
        link: \\"/new_blog/\\"
      }]);"
    `)
  })
  it('置于首部', () => {
    expect(transfromCode(code, 0)).toMatchInlineSnapshot(`
      "import { navbar } from \\"vuepress-theme-hope\\";
      export const zhNavbar = navbar([{
        text: \\"\\\\u65B0\\\\u535A\\\\u5BA2\\\\u76EE\\\\u5F55\\",
        icon: \\"note\\",
        link: \\"/new_blog/\\"
      }, {
        text: \\"代码笔记\\",
        icon: \\"code\\",
        link: \\"/codenotes/\\"
      }, {
        text: \\"工具杂记\\",
        icon: \\"note\\",
        link: \\"/utils/\\"
      }, {
        text: \\"浮生杂记\\",
        icon: \\"note\\",
        link: \\"/floatinglife/\\"
      }]);"
    `)
  })
  it('置于第二位', () => {
    expect(transfromCode(code, 1)).toMatchInlineSnapshot(`
      "import { navbar } from \\"vuepress-theme-hope\\";
      export const zhNavbar = navbar([{
        text: \\"代码笔记\\",
        icon: \\"code\\",
        link: \\"/codenotes/\\"
      }, {
        text: \\"\\\\u65B0\\\\u535A\\\\u5BA2\\\\u76EE\\\\u5F55\\",
        icon: \\"note\\",
        link: \\"/new_blog/\\"
      }, {
        text: \\"工具杂记\\",
        icon: \\"note\\",
        link: \\"/utils/\\"
      }, {
        text: \\"浮生杂记\\",
        icon: \\"note\\",
        link: \\"/floatinglife/\\"
      }]);"
    `)
  })

})

