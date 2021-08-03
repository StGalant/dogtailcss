import listFiles from './file-utils/listFiles'
import * as path from 'path'

const filesPatterns = [
  'src/components/**/*.vue',
  'src/pages/**/*.vue',
  'src/layouts/**/*.vue',
].map((f) => path.resolve(f))

let files = []

export default function TailCssPlugin() {
  return {
    name: 'tailcss-plugin',
    buildStart() {
      //read config
      //create dogtailcss instance
      //Build dogtail.css file
    },
    handleHotUpdate(ctx: { file: string; modules: Array<any> }) {
      //Update dogtail.css file
      return ctx.modules
    },
  }
}
