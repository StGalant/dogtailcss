import fg from 'fast-glob'
import fs from 'fs'
import micromatch from 'micromatch'
import htmlExtractor from './extractorHtml.js'

function listFiles(patterns: string[]): string[] {
  const entries = fg.sync(patterns, { absolute: false })
  return entries
}

export function createCssExtractor(patterns: string[]) {
  return {
    extractAll() {
      let allClasses = []
      for (let file of listFiles(patterns)) {
        let fileContent = fs.readFileSync(file, { encoding: 'utf-8' })
        //TODO determine filetype and filter it properly
        let classes = htmlExtractor(fileContent)
        if (classes.size > 0) {
          allClasses.push({
            id: file,
            classes,
          })
        }
      }
      return allClasses
    },
    extractSync(file: string): Set<string> | void {
      if (!this.isMatch(file)) return
      try {
        let fileContent = fs.readFileSync(file, { encoding: 'utf-8' })
        return htmlExtractor(fileContent)
      } catch (err) {
        console.error(err + '\n Cannot read file ' + file)
        return undefined
      }
      //TODO determine filetype and filter it properly
    },
    extract(file: string): Promise<Set<string>> {
      if (!this.isMatch(file)) return Promise.reject()
      return fs.promises.readFile(file, { encoding: 'utf-8' }).then(
        (fileContent) => {
          //TODO determine filetype and filter it properly
          return htmlExtractor(fileContent)
        },
        (err) => {
          console.error(err + '\n Cannot read file ' + file)
          throw err
        }
      )
    },
    isMatch(file: string): boolean {
      return micromatch.isMatch(file, patterns)
    },
  }
}
