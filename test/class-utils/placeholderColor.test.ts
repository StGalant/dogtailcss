import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let compileOpacity = createCssCompiler(
  utils,
  { ...theme, ...{ useVarOpacity: true } },
  { tabSize }
)
let t = ' '.repeat(tabSize)

test('compile placeholder-gray-600', () => {
  let { rule } = compile('placeholder-gray-600') as CssCompilerResult
  expect(rule).toBe(
    `.placeholder-gray-600::placeholder {\n${t}color: #52525b;\n}\n`
  )
})

test('compile placeholder-indigo-600 with opacity', () => {
  let { rule } = compileOpacity('placeholder-indigo-600') as CssCompilerResult
  expect(rule).toBe(
    `.placeholder-indigo-600::placeholder {\n${t}color: rgba(79, 70, 229, var(--t-placeholder-opacity, 1));\n}\n`
  )
})
