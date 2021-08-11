import { Theme } from './theme/index.js'
import { objectToCss } from './objectToCss.js'
import { ClassUtility, ClassUtils } from './class-utils/index.js'

export interface FormatOptions {
  tabSize: number
  screenAutoLevel: boolean
}

const defaultFormatOptions: FormatOptions = {
  tabSize: 4,
  screenAutoLevel: true,
}

export interface CssCompilerResult {
  screen: string
  rule: string
}

export type CssCompiler = (className: string) => CssCompilerResult

export function createDogtailCssCompiler(
  classUtils: ClassUtils,
  theme: Theme,
  options = {}
): CssCompiler {
  let { tabSize, screenAutoLevel } = { ...defaultFormatOptions, ...options }

  return function (className): CssCompilerResult {
    //compilePureClassName
    function compilePureClassName(className: string) {
      let dashIndex = className.length
      while (dashIndex > 0) {
        let tmpClassName = className.substring(0, dashIndex)
        if (classUtils.has(tmpClassName)) {
          for (let plugin of classUtils.get(tmpClassName) as ClassUtility[]) {
            let rule = plugin[tmpClassName].call(
              undefined,
              className.substring(dashIndex + 1),
              theme
            )
            if (rule) {
              return rule
            }
          }
        }
        dashIndex = className.lastIndexOf('-', dashIndex - 1)
      }
    } //compilePureClassName

    let screen = 'normal'
    let scrMinWidth = 0
    let pseudo: string[] = []
    let parts = className.split(':')
    let pureClassName: string = ''

    parts.forEach((part) => {
      let scr = theme.screens.find(({ name }) => name === part)
      if (scr) {
        if (screen == 'normal' || scr.minWidth < scrMinWidth) screen = scr.name
        scrMinWidth = scr.minWidth
        return
      }
      if (theme.pseudoClasses[part]) {
        pseudo.push(theme.pseudoClasses[part])
        return
      }
      pureClassName = part
    })

    let rule = compilePureClassName(pureClassName)
    if (!rule) {
      return { screen: 'normal', rule: '' }
    }

    let escClassName =
      '.' +
      className
        .replace(/[#:.,*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/^[0-9]/g, '\\3$& ')
    if (rule && escClassName) {
      return {
        screen,
        rule: objectToCss(
          `${escClassName}${pseudo.join('')}`,
          rule,
          screenAutoLevel && screen === 'normal' ? 0 : 1,
          {
            tabSize,
          }
        ),
      }
    }
    return { screen: '', rule: '' }
  }
}
