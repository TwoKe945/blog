import prompts from 'prompts'
import { path } from './utils'
import { join, resolve } from 'node:path'
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { insertBlogDir } from './features/blog-dir'

const { __dirname, __filename } = path(import.meta.url)

/**
 * 脚本功能：
 * 1、创建文章
 * 2、创建目录
 */
 interface Runable {
  (): void
}

type CreateType = ['article', 'directory']

interface PromptsResponse {
  value: CreateType[number]
}
type CreateFactory = {
  [key in CreateType[number]]: Runable
}

const createFactory:CreateFactory = {
  'article': () => {},
  'directory': mkdir
}


const DIR_ENTRY = (title: string) =>
`---
title: ${title}
# 当前页面图标
icon: note
sticky: false
# 是否收藏在博客主题的文章列表中，当填入数字时，数字越大，排名越靠前。
star: false
# 是否将该文章添加至文章列表中
article: false
# 是否将该文章添加至时间线中
timeline: false
---

# ${title}`
;

/**
 * 创建目录
 */
async function mkdir() {
  const response = await prompts([
    {
      type: 'text',
      name: 'dirName',
      message: '请输入博客目录名',
    },
    {
      type: 'text',
      name: 'title',
      message: '请输入入口标题',
      initial: `默认博客内容`
    }
  ])
  const dirPath = resolve(__dirname, '../src/', response.dirName);
  const entryPath = join(dirPath, 'README.md');
  if (!existsSync(dirPath)) {
    // 创建目录
    mkdirSync(dirPath);
    // 编写内容
    writeFileSync(entryPath, DIR_ENTRY(response.title), { encoding: 'utf-8' })
    // 修改配置
    insertBlogDir(response.title, response.dirName)
  }
}





(async function () {
  const response:PromptsResponse = await prompts([
    {
      type: 'select',
      name: 'value',
      message: '选择功能',
      choices: [
        { title: '文章', value: 'article', description: '博客文章' },
        { title: '目录', value: 'directory', description: '博客目录' },
      ],
      initial: 0,
    }
  ])
  // 创建指定的
  createFactory[response.value]();
}
)()
