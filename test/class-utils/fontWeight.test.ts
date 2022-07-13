import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile font-normal', () => {
  let { rule } = compile('font-normal') as CssCompilerResult
  expect(rule).toBe(`.font-normal {\n${t}font-weight: 400;\n}\n`)
})
