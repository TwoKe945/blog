import { fileURLToPath } from 'url'
import { dirname } from 'path'
import traverselib from '@babel/traverse'
import { parse } from '@babel/parser'
import generatorlib from '@babel/generator'

type Traverse = typeof traverselib
const traverse:Traverse = (traverselib as any).default

type Generator = typeof generatorlib
const generator:Generator = (generatorlib as any).default

export {
  parse,
  generator,
  traverse
}




export function nodeNnv(url: string) {
  const __filename = fileURLToPath(url)
  const __dirname = dirname(__filename)
  return {
    __filename,
    __dirname
  }
}
