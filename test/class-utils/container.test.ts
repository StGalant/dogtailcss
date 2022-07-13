import { createCssCompiler, CssCompilerResult } from '../../src/cssCompiler'
import { createClassUtils } from '../../src/class-utils'
import { theme } from '../../src/theme'

let tabSize = 4
let utils = createClassUtils()
let compile = createCssCompiler(utils, theme, { tabSize })
let t = ' '.repeat(tabSize)

test('compile container', () => {
  let rule = compile('container') as CssCompilerResult
  expect(rule).toStrictEqual([
    { screen: 'normal', rule: `.container {\n${t}width: 100%;\n}\n` },
    {
      screen: 'xs',
      rule: `${t}.container {\n${t}${t}max-width: 480px;\n${t}}\n`,
    },
    {
      screen: 'sm',
      rule: `${t}.container {\n${t}${t}max-width: 640px;\n${t}}\n`,
    },
    {
      screen: 'md',
      rule: `${t}.container {\n${t}${t}max-width: 768px;\n${t}}\n`,
    },
    {
      screen: 'lg',
      rule: `${t}.container {\n${t}${t}max-width: 1024px;\n${t}}\n`,
    },
    {
      screen: 'xl',
      rule: `${t}.container {\n${t}${t}max-width: 1280px;\n${t}}\n`,
    },
    {
      screen: '2xl',
      rule: `${t}.container {\n${t}${t}max-width: 1536px;\n${t}}\n`,
    },
  ])
})
