import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile ~check:visible', () => {
  let { rule } = compile('~check:visible') as CssCompilerResult
  expect(rule).toBe(
    `input:checked ~ .\\~check\\:visible {\n${t}visibility: visible;\n}\n`
  )
})
