import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile auto-cols-4fr', () => {
  let { rule } = compile('auto-cols-4fr') as CssCompilerResult
  expect(rule).toBe(
    `.auto-cols-4fr {\n${t}grid-auto-columns: minmax(0, 4fr);\n}\n`
  )
})

test('compile auto-cols-(20px,4fr)', () => {
  let { rule } = compile('auto-cols-(20px,4fr)') as CssCompilerResult
  expect(rule).toBe(
    `.auto-cols-\\(20px\\,4fr\\) {\n${t}grid-auto-columns: minmax(20px,4fr);\n}\n`
  )
})

test('compile auto-cols-(20px,33.33%)', () => {
  let { rule } = compile('auto-cols-(20px,33.33%)') as CssCompilerResult
  expect(rule).toBe(
    `.auto-cols-\\(20px\\,33\\.33\\%\\) {\n${t}grid-auto-columns: minmax(20px,33.33%);\n}\n`
  )
})
