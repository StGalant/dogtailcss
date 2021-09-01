import { CssCompilerResult } from '../../src/cssCompiler'
import setup from './_setup'

let { compile, t } = setup()

test('compile uppercase', () => {
  let { rule } = compile('uppercase') as CssCompilerResult
  expect(rule).toBe(`.uppercase {\n${t}text-transform: uppercase;\n}\n`)
})

test('compile lowercase', () => {
  let { rule } = compile('lowercase') as CssCompilerResult
  expect(rule).toBe(`.lowercase {\n${t}text-transform: lowercase;\n}\n`)
})

test('compile capitalize', () => {
  let { rule } = compile('capitalize') as CssCompilerResult
  expect(rule).toBe(`.capitalize {\n${t}text-transform: capitalize;\n}\n`)
})

test('compile normal-case', () => {
  let { rule } = compile('normal-case') as CssCompilerResult
  expect(rule).toBe(`.normal-case {\n${t}text-transform: none;\n}\n`)
})
