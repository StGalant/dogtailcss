import { CssCompilerResult } from '../../src/cssCompiler'
import setup from './_setup'

let { compile, t } = setup()

test('compile break-normal', () => {
  let { rule } = compile('break-normal') as CssCompilerResult
  expect(rule).toBe(
    `.break-normal {\n${t}overflow-wrap: normal;\n${t}word-break: normal;\n}\n`
  )
})

test('compile break-words', () => {
  let { rule } = compile('break-words') as CssCompilerResult
  expect(rule).toBe(`.break-words {\n${t}overflow-wrap: break-word;\n}\n`)
})

test('compile break-all', () => {
  let { rule } = compile('break-all') as CssCompilerResult
  expect(rule).toBe(`.break-all {\n${t}word-break: break-all;\n}\n`)
})
