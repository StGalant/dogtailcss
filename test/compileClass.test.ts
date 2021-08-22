import { createCssCompiler, CssCompilerResult } from '../src/cssCompiler.js'
import { createClassUtils } from '../src/class-utils/index.js'
import { theme } from '../src/theme/index.js'

let tabSize = 4
let compile = createCssCompiler(createClassUtils(), theme, { tabSize })
let t = ' '.repeat(tabSize)
interface ColorWithSub {
  [key: string]: string
}

test('compile sm:text-red-500', () => {
  let { screen, rule } = compile('sm:text-red-500') as CssCompilerResult
  expect(screen).toBe('sm')
  expect(rule).toBe(
    `${t}.sm\\:text-red-500 {\n${t}${t}color: ${
      (theme.colors.red as ColorWithSub)['500']
    };\n${t}}\n`
  )
})

test('compile xl:text-red-500:sm', () => {
  let { screen, rule } = compile('xl:text-red-500:sm') as CssCompilerResult
  expect(screen).toBe('sm')
  expect(rule).toBe(
    `${t}.xl\\:text-red-500\\:sm {\n${t}${t}color: ${
      (theme.colors.red as ColorWithSub)['500']
    };\n${t}}\n`
  )
})

test('compile lg:active:focus:hover:text-red-500', () => {
  let { screen, rule } = compile(
    'lg:active:focus:hover:text-red-500'
  ) as CssCompilerResult
  expect(screen).toBe('lg')
  expect(rule).toBe(
    `${t}.lg\\:active\\:focus\\:hover\\:text-red-500:active:focus:hover {\n${t}${t}color: ${
      (theme.colors.red as ColorWithSub)['500']
    };\n${t}}\n`
  )
})

test('compile lg:active:text-red-500:focus:hover', () => {
  let { screen, rule } = compile(
    'lg:active:text-red-500:focus:hover'
  ) as CssCompilerResult
  expect(screen).toBe('lg')
  expect(rule).toBe(
    `${t}.lg\\:active\\:text-red-500\\:focus\\:hover:active:focus:hover {\n${t}${t}color: ${
      (theme.colors.red as ColorWithSub)['500']
    };\n${t}}\n`
  )
})
