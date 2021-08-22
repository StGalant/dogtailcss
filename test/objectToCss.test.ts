import { objectToCss, CssFormatOptions } from '../src/objectToCss.js'

const options: CssFormatOptions = {
  tabSize: 4,
}
test('stringify simple object to css', () => {
  let className = '.text-gray-500'
  let tab = ' '.repeat(options.tabSize)

  const obj = {
    color: '#AAA',
    opacity: '1',
  }

  let css = objectToCss(className, obj, 0, options)

  expect(css).toBe(`${className} {\n${tab}color: #AAA;\n${tab}opacity: 1;\n}\n`)
})
