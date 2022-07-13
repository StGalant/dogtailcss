import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile justify-items-center', () => {
  let { rule } = compile('justify-items-center') as CssCompilerResult
  expect(rule).toBe(`.justify-items-center {\n${t}justify-items: center;\n}\n`)
})

test('compile justify-items-none', () => {
  let { rule } = compile('justify-items-none') as CssCompilerResult
  expect(rule).toBe('')
})
