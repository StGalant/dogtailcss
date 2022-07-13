import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile z-1', () => {
  let { rule } = compile('z-1') as CssCompilerResult
  expect(rule).toBe(`.z-1 {\n${t}z-index: 1;\n}\n`)
})
test('compile z-auto', () => {
  let { rule } = compile('z-auto') as CssCompilerResult
  expect(rule).toBe(`.z-auto {\n${t}z-index: auto;\n}\n`)
})
test('compile z--10', () => {
  let { rule } = compile('z--10') as CssCompilerResult
  expect(rule).toBe(`.z--10 {\n${t}z-index: -10;\n}\n`)
})

test('compile -z-10', () => {
  let { rule } = compile('-z-10') as CssCompilerResult
  expect(rule).toBe(`.-z-10 {\n${t}z-index: -10;\n}\n`)
})
