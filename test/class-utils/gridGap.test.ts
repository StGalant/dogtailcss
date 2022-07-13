import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile gap-0.5', () => {
  let { rule } = compile('gap-0.5') as CssCompilerResult
  expect(rule).toBe(`.gap-0\\.5 {\n${t}gap: 0.125rem;\n}\n`)
})

test('compile gap-x-5px', () => {
  let { rule } = compile('gap-x-5px') as CssCompilerResult
  expect(rule).toBe(`.gap-x-5px {\n${t}column-gap: 5px;\n}\n`)
})

test('compile gap-y-px', () => {
  let { rule } = compile('gap-y-px') as CssCompilerResult
  expect(rule).toBe(`.gap-y-px {\n${t}row-gap: 1px;\n}\n`)
})
