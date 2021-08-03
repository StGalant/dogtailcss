import { objectToCss, CssFormatOptions } from '../objectToCss'

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

  let css = objectToCss(obj, className, options)

  expect(css).toBe(`${className} {\n${tab}color: #AAA;\n${tab}opacity: 1;\n}\n`)
})

test('stringify nested object to css', () => {
  let className = '@media (min-width: 1024px)'
  let tab = ' '.repeat(options.tabSize)

  const obj = {
    '.lg\\:text-gray-500': {
      color: '#AAA',
      opacity: '1',
    },
  }

  let css = objectToCss(obj, className, options)

  expect(css).toBe(
    `${className} {\n${tab}.lg\\:text-gray-500 {\n${tab}${tab}color: #AAA;\n${tab}${tab}opacity: 1;\n${tab}}\n}\n`
  )
})
