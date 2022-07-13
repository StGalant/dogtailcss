import { CssCompilerResult } from '../../src/cssCompiler'
import setup from './_setup'

let { compile, compileOpacity, t } = setup()

/* border radius */
test('compile rounded-none', () => {
  let { rule } = compile('rounded-none') as CssCompilerResult
  expect(rule).toBe(`.rounded-none {\n${t}border-radius: 0px;\n}\n`)
})

test('compile rounded', () => {
  let { rule } = compile('rounded') as CssCompilerResult
  expect(rule).toBe(`.rounded {\n${t}border-radius: .25rem;\n}\n`)
})

test('compile rounded-sm', () => {
  let { rule } = compile('rounded-sm') as CssCompilerResult
  expect(rule).toBe(`.rounded-sm {\n${t}border-radius: .125rem;\n}\n`)
})
