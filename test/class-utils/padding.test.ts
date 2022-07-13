import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile p-2', () => {
  let { rule } = compile('p-2') as CssCompilerResult
  expect(rule).toBe(`.p-2 {\n${t}padding: 0.5rem;\n}\n`)
})

test('compile p--2', () => {
  let { rule } = compile('p--2') as CssCompilerResult
  expect(rule).toBe(`.p--2 {\n${t}padding: -0.5rem;\n}\n`)
})

test('compile p-4-2', () => {
  let { rule } = compile('p-4-2') as CssCompilerResult
  expect(rule).toBe(`.p-4-2 {\n${t}padding: 1rem 0.5rem;\n}\n`)
})

test('compile p-4-2-2', () => {
  let { rule } = compile('p-4-2-2') as CssCompilerResult
  expect(rule).toBe(`.p-4-2-2 {\n${t}padding: 1rem 0.5rem 0.5rem;\n}\n`)
})

test('compile p-4-2-2-2', () => {
  let { rule } = compile('p-4-2-2-2') as CssCompilerResult
  expect(rule).toBe(
    `.p-4-2-2-2 {\n${t}padding: 1rem 0.5rem 0.5rem 0.5rem;\n}\n`
  )
})

test('compile p-4px-2rem-20%-auto', () => {
  let { rule } = compile('p-4px-2rem-20%-auto') as CssCompilerResult
  expect(rule).toBe(
    `.p-4px-2rem-20\\%-auto {\n${t}padding: 4px 2rem 20% auto;\n}\n`
  )
})

test('compile p--4--2--2--2', () => {
  let { rule } = compile('p--4--2--2--2') as CssCompilerResult
  expect(rule).toBe(
    `.p--4--2--2--2 {\n${t}padding: -1rem -0.5rem -0.5rem -0.5rem;\n}\n`
  )
})

test('compile px--8--2', () => {
  let { rule } = compile('px--8--2') as CssCompilerResult
  expect(rule).toBe(
    `.px--8--2 {\n${t}padding-left: -2rem;\n${t}padding-right: -0.5rem;\n}\n`
  )
})

test('compile px-10%', () => {
  let { rule } = compile('px-10%') as CssCompilerResult
  expect(rule).toBe(
    `.px-10\\% {\n${t}padding-left: 10%;\n${t}padding-right: 10%;\n}\n`
  )
})
