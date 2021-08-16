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

test('compile text-indigo-600', () => {
  let { rule } = compile('text-indigo-600') as CssCompilerResult
  expect(rule).toBe(`.text-indigo-600 {\n${t}color: #4f46e5;\n}\n`)
})

test('compile text-black-600', () => {
  let { rule } = compile('text-black-600') as CssCompilerResult
  expect(rule).toBe('')
})

test('compile text-indigo-600 with opacity', () => {
  let { rule } = compileOpacity('text-indigo-600') as CssCompilerResult
  expect(rule).toBe(
    `.text-indigo-600 {\n${t}--t-text-opacity): 1;\n${t}color: rgba(79, 70, 229, var(--t-text-opacity));\n}\n`
  )
})
