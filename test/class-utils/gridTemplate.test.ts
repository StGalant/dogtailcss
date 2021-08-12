import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile grid-cols-4', () => {
  let { rule } = compile('grid-cols-4') as CssCompilerResult
  expect(rule).toBe(
    `.grid-cols-4 {\n${t}grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n`
  )
})

test('compile grid-cols-[1fr,50%,60px,2fr]', () => {
  let { rule } = compile('grid-cols-[1fr,50%,60px,2fr]') as CssCompilerResult
  expect(rule).toBe(
    `.grid-cols-\\[1fr\\,50\\%\\,60px\\,2fr\\] {\n${t}grid-template-columns: 1fr 50% 60px 2fr;\n}\n`
  )
})

test('compile grid-cols-(5,1fr)', () => {
  let { rule } = compile('grid-cols-(5,1fr)') as CssCompilerResult
  expect(rule).toBe(
    `.grid-cols-\\(5\\,1fr\\) {\n${t}grid-template-columns: repeat(5,1fr);\n}\n`
  )
})
