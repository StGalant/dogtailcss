import { createDogtailCssCompiler } from '../dogtailcss'
import { createClassUtils } from '../class-utils'
import { theme } from '../theme'

let tabSize = 4
let compile = createDogtailCssCompiler(createClassUtils(), theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile text-#00FAFF', () => {
  let { rule } = compile('text-#00FAFF')
  expect(rule).toBe(`.text-\\#00FAFF {\n${t}color: #00FAFF;\n}\n`)
})

test('compile text-fuchsia-500', () => {
  let { rule } = compile('text-fuchsia-500')
  expect(rule).toEqual(`.text-fuchsia-500 {\n${t}color: #d946ef;\n}\n`)
})

test('compile text-UNDEFINED', () => {
  let { rule } = compile('text-UNDEFINED')
  expect(rule).toBe('')
})

test('compile text-maroon', () => {
  let { rule } = compile('text-maroon')
  expect(rule).toEqual(`.text-maroon {\n${t}color: #800000;\n}\n`)
})

test('compile text-black', () => {
  let { rule } = compile('text-black')
  expect(rule).toEqual(`.text-black {\n${t}color: #000;\n}\n`)
})

test('compile text-(255,99,71,0.5)', () => {
  let { rule } = compile('text-(255,99,71,0.5)')
  expect(rule).toEqual(`.text-\\(255\\,99\\,71\\,0\\.5\\) {\n${t}color: rgba(255,99,71,0.5);\n}\n`)
})

test('compile text-[primary]', () => {
  let { rule } = compile('text-[primary]')
  expect(rule).toEqual(`.text-\\[primary\\] {\n${t}color: var(--t-color-primary);\n}\n`)
})
