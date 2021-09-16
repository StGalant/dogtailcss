import { CssCompilerResult } from '../../src/cssCompiler'
import setup from './_setup'

let { compile, compileOpacity, t } = setup()

test('compile bg-fixed', () => {
  let { rule } = compile('bg-fixed') as CssCompilerResult
  expect(rule).toBe(`.bg-fixed {\n${t}background-attachment: fixed;\n}\n`)
})

test('compile bg-local', () => {
  let { rule } = compile('bg-local') as CssCompilerResult
  expect(rule).toBe(`.bg-local {\n${t}background-attachment: local;\n}\n`)
})
test('compile bg-scroll', () => {
  let { rule } = compile('bg-scroll') as CssCompilerResult
  expect(rule).toBe(`.bg-scroll {\n${t}background-attachment: scroll;\n}\n`)
})

test('compile bg-clip-border', () => {
  let { rule } = compile('bg-clip-border') as CssCompilerResult
  expect(rule).toBe(`.bg-clip-border {\n${t}background-clip: border-box;\n}\n`)
})

test('compile bg-clip-padding', () => {
  let { rule } = compile('bg-clip-padding') as CssCompilerResult
  expect(rule).toBe(
    `.bg-clip-padding {\n${t}background-clip: padding-box;\n}\n`
  )
})

test('compile bg-clip-content', () => {
  let { rule } = compile('bg-clip-content') as CssCompilerResult
  expect(rule).toBe(
    `.bg-clip-content {\n${t}background-clip: content-box;\n}\n`
  )
})

test('compile bg-clip-text', () => {
  let { rule } = compile('bg-clip-text') as CssCompilerResult
  expect(rule).toBe(`.bg-clip-text {\n${t}background-clip: text;\n}\n`)
})

/* background color */
test('compile bg-indigo-600', () => {
  let { rule } = compile('bg-indigo-600') as CssCompilerResult
  expect(rule).toBe(`.bg-indigo-600 {\n${t}background-color: #4f46e5;\n}\n`)
})

test('compile bg-black-600', () => {
  let { rule } = compile('bg-black-600') as CssCompilerResult
  expect(rule).toBe('')
})

test('compile bg-indigo-600 with opacity', () => {
  let { rule } = compileOpacity('bg-indigo-600') as CssCompilerResult
  expect(rule).toBe(
    `.bg-indigo-600 {\n${t}background-color: rgba(79, 70, 229, var(--t-bg-opacity, 1));\n}\n`
  )
})

test('compile bg-black with opacity', () => {
  let { rule } = compileOpacity('bg-black') as CssCompilerResult
  expect(rule).toBe(
    `.bg-black {\n${t}background-color: rgba(0, 0, 0, var(--t-bg-opacity, 1));\n}\n`
  )
})

test('compile bg-opacity-55', () => {
  let { rule } = compileOpacity('bg-opacity-55') as CssCompilerResult
  expect(rule).toBe(`.bg-opacity-55 {\n${t}--t-bg-opacity: 0.55;\n}\n`)
})

test('compile bg-indigo-600-op-33.33', () => {
  let { rule } = compile('bg-indigo-600-op-33.33') as CssCompilerResult
  expect(rule).toBe(
    `.bg-indigo-600-op-33\\.33 {\n${t}background-color: rgba(79, 70, 229, 0.3333);\n}\n`
  )
})

test('compile bg-[primary-1]', () => {
  let { rule } = compile('bg-[primary-1]') as CssCompilerResult
  expect(rule).toBe(
    `.bg-\\[primary-1\\] {\n${t}background-color: var(--t-color-primary-1);\n}\n`
  )
})

test('compile bg-(10,200,155)', () => {
  let { rule } = compile('bg-(10,200,155)') as CssCompilerResult
  expect(rule).toBe(
    `.bg-\\(10\\,200\\,155\\) {\n${t}background-color: rgb(10,200,155);\n}\n`
  )
})

test('compile bg-(10,200,155,.5)', () => {
  let { rule } = compile('bg-(10,200,155,.5)') as CssCompilerResult
  expect(rule).toBe(
    `.bg-\\(10\\,200\\,155\\,\\.5\\) {\n${t}background-color: rgba(10,200,155,.5);\n}\n`
  )
})

test('compile bg-#00FAFF', () => {
  let { rule } = compile('bg-#00FAFF') as CssCompilerResult
  expect(rule).toBe(`.bg-\\#00FAFF {\n${t}background-color: #00FAFF;\n}\n`)
})

test('compile bg-maroon', () => {
  let { rule } = compile('bg-maroon') as CssCompilerResult
  expect(rule).toBe(`.bg-maroon {\n${t}background-color: #800000;\n}\n`)
})
