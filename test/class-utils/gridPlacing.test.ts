import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile col-start-4', () => {
  let { rule } = compile('col-start-4') as CssCompilerResult
  expect(rule).toBe(`.col-start-4 {\n${t}grid-column-start: 4;\n}\n`)
})

test('compile col-start--4', () => {
  let { rule } = compile('col-start--4') as CssCompilerResult
  expect(rule).toBe(`.col-start--4 {\n${t}grid-column-start: -4;\n}\n`)
})

test('compile col-1-4', () => {
  let { rule } = compile('col-1-4') as CssCompilerResult
  expect(rule).toBe(`.col-1-4 {\n${t}grid-column: 1 / 4;\n}\n`)
})

test('compile col-2--4', () => {
  let { rule } = compile('col-2--4') as CssCompilerResult
  expect(rule).toBe(`.col-2--4 {\n${t}grid-column: 2 / -4;\n}\n`)
})
test('compile col--2--4', () => {
  let { rule } = compile('col--2--4') as CssCompilerResult
  expect(rule).toBe(`.col--2--4 {\n${t}grid-column: -2 / -4;\n}\n`)
})

test('compile col--2-4', () => {
  let { rule } = compile('col--2-4') as CssCompilerResult
  expect(rule).toBe(`.col--2-4 {\n${t}grid-column: -2 / 4;\n}\n`)
})

test('compile col-2-span-4', () => {
  let { rule } = compile('col--2-4') as CssCompilerResult
  expect(rule).toBe(`.col--2-4 {\n${t}grid-column: -2 / 4;\n}\n`)
})

test('compile col-span-3', () => {
  let { rule } = compile('col-span-3') as CssCompilerResult
  expect(rule).toBe(`.col-span-3 {\n${t}grid-column: span 3 / span 3;\n}\n`)
})

test('compile col-span-full', () => {
  let { rule } = compile('col-span-full') as CssCompilerResult
  expect(rule).toBe(`.col-span-full {\n${t}grid-column: 1 / -1;\n}\n`)
})

test('compile row--2-4', () => {
  let { rule } = compile('row--2-4') as CssCompilerResult
  expect(rule).toBe(`.row--2-4 {\n${t}grid-row: -2 / 4;\n}\n`)
})

test('compile row-2-span-4', () => {
  let { rule } = compile('row--2-4') as CssCompilerResult
  expect(rule).toBe(`.row--2-4 {\n${t}grid-row: -2 / 4;\n}\n`)
})

test('compile row-span-3', () => {
  let { rule } = compile('row-span-3') as CssCompilerResult
  expect(rule).toBe(`.row-span-3 {\n${t}grid-row: span 3 / span 3;\n}\n`)
})
