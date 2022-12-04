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
