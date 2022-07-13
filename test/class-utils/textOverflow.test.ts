import { CssCompilerResult } from '../../src/cssCompiler'
import { objectToCss } from '../../src/objectToCss'
import setup from './_setup'

let { compile } = setup()

test('compile truncate', () => {
  let { rule } = compile('truncate') as CssCompilerResult
  expect(rule).toBe(
    objectToCss('.truncate', {
      overflow: 'hidden',
      'text-overflow': 'ellipsis',
      'white-space': 'nowrap',
    })
  )
})

test('compile overflow-ellipsis', () => {
  let { rule } = compile('overflow-ellipsis') as CssCompilerResult
  expect(rule).toBe(
    objectToCss('.overflow-ellipsis', {
      'text-overflow': 'ellipsis',
    })
  )
})

test('compile overflow-clip', () => {
  let { rule } = compile('overflow-clip') as CssCompilerResult
  expect(rule).toBe(
    objectToCss('.overflow-clip', {
      'text-overflow': 'clip',
    })
  )
})
