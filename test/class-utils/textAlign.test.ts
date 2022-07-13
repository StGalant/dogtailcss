import { CssCompilerResult } from '../../src/cssCompiler'
import setup from './_setup'

let { compile, t } = setup()

test('compile text-center', () => {
  let { rule } = compile('text-center') as CssCompilerResult
  expect(rule).toBe(`.text-center {\n${t}text-align: center;\n}\n`)
})

test('compile text-right', () => {
  let { rule } = compile('text-right') as CssCompilerResult
  expect(rule).toBe(`.text-right {\n${t}text-align: right;\n}\n`)
})

test('compile text-justify', () => {
  let { rule } = compile('text-justify') as CssCompilerResult
  expect(rule).toBe(`.text-justify {\n${t}text-align: justify;\n}\n`)
})

test('compile text-left', () => {
  let { rule } = compile('text-left') as CssCompilerResult
  expect(rule).toBe(`.text-left {\n${t}text-align: left;\n}\n`)
})
