import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile mb-1:space', () => {
  let { rule } = compile('mb-1:space') as CssCompilerResult
  expect(rule).toBe(`.mb-1\\:space > * + * {\n${t}margin-bottom: 0.25rem;\n}\n`)
})

test('compile space:mb-1', () => {
  let { rule } = compile('space:mb-1') as CssCompilerResult
  expect(rule).toBe(`.space\\:mb-1 > * + * {\n${t}margin-bottom: 0.25rem;\n}\n`)
})

test('compile mb-1:next', () => {
  let { rule } = compile('mb-1:next') as CssCompilerResult
  expect(rule).toBe(`.mb-1\\:next + * {\n${t}margin-bottom: 0.25rem;\n}\n`)
})
