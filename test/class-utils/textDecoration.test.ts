import { CssCompilerResult } from '../../src/cssCompiler'
import setup from './_setup'

let { compile, t } = setup()

test('compile underline', () => {
  let { rule } = compile('underline') as CssCompilerResult
  expect(rule).toBe(`.underline {\n${t}text-decoration: underline;\n}\n`)
})

test('compile line-through', () => {
  let { rule } = compile('line-through') as CssCompilerResult
  expect(rule).toBe(`.line-through {\n${t}text-decoration: line-through;\n}\n`)
})

test('compile no-underline', () => {
  let { rule } = compile('no-underline') as CssCompilerResult
  expect(rule).toBe(`.no-underline {\n${t}text-decoration: none;\n}\n`)
})
