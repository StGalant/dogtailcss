const classCompiler = require('../compiler').default
const plugins = require('../plugins').default

beforeAll(() => {
  classCompiler.init(plugins)
})
test('import plugins', () => {
  expect(classCompiler.plugins.has('text'))
})

test('compile text-#00FAFF', () => {
  let rule = classCompiler.compile('text-#00FAFF')
  expect(rule).toEqual({
    color: '#00FAFF',
  })
})

test('compile text-fuchsia-500', () => {
  let rule = classCompiler.compile('text-fuchsia-500')
  expect(rule).toEqual({
    color: '#d946ef',
  })
})

test('compile text-UNDEFINED', () => {
  let rule = classCompiler.compile('text-UNDEFINED')
  expect(rule).toBeUndefined()
})

test('compile text-maroon', () => {
  let rule = classCompiler.compile('text-maroon')
  expect(rule).toEqual({
    color: '#800000',
  })
})

test('compile text-black', () => {
  let rule = classCompiler.compile('text-black')
  expect(rule).toEqual({
    color: '#000',
  })
})

test('compile text-(255,99,71,0.5)', () => {
  let rule = classCompiler.compile('text-(255,99,71,0.5)')
  expect(rule).toEqual({
    color: 'rgba(255,99,71,0.5)',
  })
})

test('compile text-[primary]', () => {
  let rule = classCompiler.compile('text-[primary]')
  expect(rule).toEqual({
    color: 'var(--t-color-primary)',
  })
})
