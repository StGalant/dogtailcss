import { CssCompilerResult } from '../../src/cssCompiler'
import setup from './_setup'

let { compile, t } = setup()

test('compile whitespace-normal', () => {
  let { rule } = compile('whitespace-normal') as CssCompilerResult
  expect(rule).toBe(`.whitespace-normal {\n${t}white-space: normal;\n}\n`)
})

test('compile whitespace-nowrap', () => {
  let { rule } = compile('whitespace-nowrap') as CssCompilerResult
  expect(rule).toBe(`.whitespace-nowrap {\n${t}white-space: nowrap;\n}\n`)
})

test('compile whitespace-pre', () => {
  let { rule } = compile('whitespace-pre') as CssCompilerResult
  expect(rule).toBe(`.whitespace-pre {\n${t}white-space: pre;\n}\n`)
})

test('compile whitespace-pre-line', () => {
  let { rule } = compile('whitespace-pre-line') as CssCompilerResult
  expect(rule).toBe(`.whitespace-pre-line {\n${t}white-space: pre-line;\n}\n`)
})

test('compile whitespace-pre-wrap', () => {
  let { rule } = compile('whitespace-pre-wrap') as CssCompilerResult
  expect(rule).toBe(`.whitespace-pre-wrap {\n${t}white-space: pre-wrap;\n}\n`)
})

test('compile whitespace-unexisted', () => {
  let { rule } = compile('whitespace-unexisted') as CssCompilerResult
  expect(rule).toBe('')
})
