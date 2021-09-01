import { CssCompilerResult } from '../../src/cssCompiler'
import setup from './_setup'

let { compile, t } = setup()

test('compile align-baseline', () => {
  let { rule } = compile('align-baseline') as CssCompilerResult
  expect(rule).toBe(`.align-baseline {\n${t}vertical-align: baseline;\n}\n`)
})

test('compile align-top', () => {
  let { rule } = compile('align-top') as CssCompilerResult
  expect(rule).toBe(`.align-top {\n${t}vertical-align: top;\n}\n`)
})

test('compile align-middle', () => {
  let { rule } = compile('align-middle') as CssCompilerResult
  expect(rule).toBe(`.align-middle {\n${t}vertical-align: middle;\n}\n`)
})

test('compile align-bottom', () => {
  let { rule } = compile('align-bottom') as CssCompilerResult
  expect(rule).toBe(`.align-bottom {\n${t}vertical-align: bottom;\n}\n`)
})

test('compile align-text-top', () => {
  let { rule } = compile('align-text-top') as CssCompilerResult
  expect(rule).toBe(`.align-text-top {\n${t}vertical-align: text-top;\n}\n`)
})

test('compile align-text-bottom', () => {
  let { rule } = compile('align-text-bottom') as CssCompilerResult
  expect(rule).toBe(
    `.align-text-bottom {\n${t}vertical-align: text-bottom;\n}\n`
  )
})
