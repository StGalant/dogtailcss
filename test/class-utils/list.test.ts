import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile list-#-', () => {
  let { rule } = compile('list-#-') as CssCompilerResult
  expect(rule).toBe(`.list-\\#- {\n${t}list-style-type: '-';\n}\n`)
})

test('compile list-custom-counter', () => {
  let { rule } = compile('list-custom-counter') as CssCompilerResult
  expect(rule).toBe(
    `.list-custom-counter {\n${t}list-style-type: custom-counter;\n}\n`
  )
})

test('compile list-outside', () => {
  let { rule } = compile('list-outside') as CssCompilerResult
  expect(rule).toBe(`.list-outside {\n${t}list-style-position: outside;\n}\n`)
})
