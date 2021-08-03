import * as winston from 'winston'
import * as mm from 'micromatch'
import listFiles from './file-utils/listFiles'
import * as path from 'path'

const filesPatterns = [
  'src/components/**/*.vue',
  'src/pages/**/*.vue',
  'src/layouts/**/*.vue',
].map((f) => path.resolve(f))

let files = []

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
})

export default function TailCssPlugin() {
  return {
    name: 'tailcss-plugin',
    buildStart() {
      files = listFiles(filesPatterns)
    },
    handleHotUpdate(ctx: { file: string; modules: Array<any> }) {
      if (mm.isMatch(ctx.file, filesPatterns)) {
        logger.log('info', 'Update file: ' + ctx.file)
      }
      return ctx.modules
    },
  }
}
