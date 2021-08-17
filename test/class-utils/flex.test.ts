import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile flex-(1,0,50%)', () => {
  let { rule } = compile('flex-(1,0,50%)') as CssCompilerResult
  expect(rule).toBe(`.flex-\\(1\\,0\\,50\\%\\) {\n${t}flex: 1 0 50%;\n}\n`)
})

test('compile flex-(1,0,fit)', () => {
  let { rule } = compile('flex-(1,0,fit)') as CssCompilerResult
  expect(rule).toBe(
    `.flex-\\(1\\,0\\,fit\\) {\n${t}flex: 1 0 fit-content;\n}\n`
  )
})
