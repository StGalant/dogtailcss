import { withSelector } from '../src/class-utils/utilHelpers.js'

test('withSelector', () => {
  let result = withSelector({ prop: 'prop' }, { place: 'after', text: 'p' })
  expect(result.prop).toEqual('prop')
  expect(result.selector).toEqual({
    place: 'after',
    text: 'p',
  })
})

test('withSelector string', () => {
  let result = withSelector({ prop: 'prop' }, 'p')
  expect(result.prop).toEqual('prop')
  expect(result.selector).toEqual({
    place: 'after',
    text: 'p',
  })
})
