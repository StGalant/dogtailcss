import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile order-first', () => {
  let { rule } = compile('order-first') as CssCompilerResult
  expect(rule).toBe(`.order-first {\n${t}order: -9999;\n}\n`)
})

test('compile order-last', () => {
  let { rule } = compile('order-last') as CssCompilerResult
  expect(rule).toBe(`.order-last {\n${t}order: 9999;\n}\n`)
})

test('compile order-5', () => {
  let { rule } = compile('order-5') as CssCompilerResult
  expect(rule).toBe(`.order-5 {\n${t}order: 5;\n}\n`)
})

test('compile order-5th', () => {
  let { rule } = compile('order-5th') as CssCompilerResult
  expect(rule).toBe('')
})
