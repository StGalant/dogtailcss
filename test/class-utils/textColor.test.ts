import { CssCompilerResult } from '../../src/cssCompiler'
import setup from './_setup'

let { compile, compileOpacity, t } = setup()

test('compile text-indigo-600', () => {
  let { rule } = compile('text-indigo-600') as CssCompilerResult
  expect(rule).toBe(`.text-indigo-600 {\n${t}color: #4f46e5;\n}\n`)
})

test('compile text-black-600', () => {
  let { rule } = compile('text-black-600') as CssCompilerResult
  expect(rule).toBe('')
})

test('compile text-indigo-600 with opacity', () => {
  let { rule } = compileOpacity('text-indigo-600') as CssCompilerResult
  expect(rule).toBe(
    `.text-indigo-600 {\n${t}color: rgba(79, 70, 229, var(--t-text-opacity, 1));\n}\n`
  )
})

test('compile text-black with opacity', () => {
  let { rule } = compileOpacity('text-black') as CssCompilerResult
  expect(rule).toBe(
    `.text-black {\n${t}color: rgba(0, 0, 0, var(--t-text-opacity, 1));\n}\n`
  )
})

test('compile text-opacity-55', () => {
  let { rule } = compileOpacity('text-opacity-55') as CssCompilerResult
  expect(rule).toBe(`.text-opacity-55 {\n${t}--t-text-opacity: 0.55;\n}\n`)
})

test('compile text-indigo-600-op-33.33', () => {
  let { rule } = compile('text-indigo-600-op-33.33') as CssCompilerResult
  expect(rule).toBe(
    `.text-indigo-600-op-33\\.33 {\n${t}color: rgba(79, 70, 229, 0.3333);\n}\n`
  )
})

test('compile text-[primary-1]', () => {
  let { rule } = compile('text-[primary-1]') as CssCompilerResult
  expect(rule).toBe(
    `.text-\\[primary-1\\] {\n${t}color: var(--t-color-primary-1);\n}\n`
  )
})

test('compile text-(10,200,155)', () => {
  let { rule } = compile('text-(10,200,155)') as CssCompilerResult
  expect(rule).toBe(
    `.text-\\(10\\,200\\,155\\) {\n${t}color: rgb(10,200,155);\n}\n`
  )
})

test('compile text-(10,200,155,.5)', () => {
  let { rule } = compile('text-(10,200,155,.5)') as CssCompilerResult
  expect(rule).toBe(
    `.text-\\(10\\,200\\,155\\,\\.5\\) {\n${t}color: rgba(10,200,155,.5);\n}\n`
  )
})

test('compile text-#00FAFF', () => {
  let { rule } = compile('text-#00FAFF') as CssCompilerResult
  expect(rule).toBe(`.text-\\#00FAFF {\n${t}color: #00FAFF;\n}\n`)
})

test('compile text-maroon', () => {
  let { rule } = compile('text-maroon') as CssCompilerResult
  expect(rule).toBe(`.text-maroon {\n${t}color: #800000;\n}\n`)
})
