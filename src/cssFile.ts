import * as fs from 'fs'
import { Css } from './Css'
import { createClassUtils } from './class-utils'
import { createDogtailCssCompiler, CssCompiler } from './dogtailcss'
import { Theme } from './theme'

export function createCssFile(
  file: fs.PathLike,
  theme: Theme,
  compiler?: CssCompiler
): Css {
  const compile =
    compiler ||
    createDogtailCssCompiler(createClassUtils(), theme, {
      tabSize: 4,
      screenAutoLevel: true,
    })

  const cssCache = new Map<string, any>()

  const css = {
    normal: new Map<string, string>(),
  }

  for (let screen of theme.screens) {
    cssCache[screen.name] = new Map<string, any>()
    css[screen.name] = new Map<string, string>()
  }

  return {
    addClasses(classes: string[] | Set<string>) {
      for (let className of classes) {
        if (cssCache.has(className)) {
          // add linkCounter
          let cacheObj = cssCache.get(className)
          cacheObj.linkCounter += 1
        } else {
          let { screen = 'normal', rule } = compile(className)
          cssCache.set(className, {
            screen,
            rule,
            linkCounter: 1, // smart pointer
          })
          css[screen].set(className, rule)
        }
      }
    },

    updateClassess(
      addClasses: string[] | Set<string>,
      removeClasses?: string[] | Set<string>
    ) {
      for (let classToDelete of removeClasses) {
        let cacheObj = cssCache.get(classToDelete)
        if (cacheObj) {
          cacheObj.linkCounter -= 1
          if (cacheObj.linkCounter < 1) {
            cssCache.delete(classToDelete)
            css[cacheObj.screen].delete(classToDelete)
          }
        }
      }
      this.addClasses(addClasses)
    },

    applyClasses() {
      const cssText = '/* dogtailcss autogenerated file */\n\n'
      let cssArray: string[] = [cssText]

      for (let [_, rule] of css.normal) {
        cssArray.push(rule)
        cssArray.push('\n')
      }

      for (let screen of theme.screens) {
        cssArray.push(`@media (min-width: ${screen.minWidth}px) {\n`)
        if (css[screen.name]) {
          for (let [_, rule] of css[screen.name]) {
            cssArray.push(rule)
            cssArray.push('\n')
          }
        }
        cssArray.push('}\n')
      }

      const cssFile = fs.openSync(file, 'w')
      if (cssFile) {
        fs.writeSync(cssFile, cssArray.join(''))
        fs.closeSync(cssFile)
      }
      //TODO handle error
    },
  }
}