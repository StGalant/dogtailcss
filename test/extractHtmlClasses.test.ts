import parseHtml from '../src/file-utils/extractorHtml.js'

let simpleHtml = `<div class="class-1
lg:hover:class-2
class-3-(1,2,3)
" attr="data"><span class="2xl:class-4-#span"> class="herabora" </span></div>`

test('get list of classes from simple html', () => {
  let expected = new Set<string>([
    'class-1',
    'lg:hover:class-2',
    'class-3-(1,2,3)',
    '2xl:class-4-#span',
  ])
  let result = parseHtml(simpleHtml)
  expect(result).toEqual(expected)
})
