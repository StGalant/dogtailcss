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

export type CssCompiler = (
  className: string
) => CssCompilerResult | CssCompilerResult[]

export function createCssCompiler(
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
    //escapedClassName
    function escapedClassName(className: string): string {
      return (
        '.' +
        className
          .replace(/[#:.,*+?%^${}()|[\]\\/]/g, '\\$&')
          .replace(/^[0-9]/g, '\\3$& ')
      )
    }
    let screen = 'normal'
    let scrMinWidth = 0
    // let pseudo: string[] = []
    let parts = className.split(':')
    // let pureClassName: string = ''

    interface Selector {
      place: 'before' | 'after'
      text: string
    }

    interface CompiledRule {
      rules: { [key: string]: string }
      selectors: Selector[]
      pseudos: string[]
    }

    let compiledRule: CompiledRule = {
      rules: {},
      selectors: [],
      pseudos: [],
    }

    parts.forEach((part) => {
      let scr = theme.screens.find(({ name }) => name === part)
      if (scr) {
        if (screen == 'normal' || scr.minWidth < scrMinWidth) screen = scr.name
        scrMinWidth = scr.minWidth
        return
      }
      if (theme.pseudoClasses[part]) {
        // pseudo.push(theme.pseudoClasses[part])
        compiledRule.pseudos.push(theme.pseudoClasses[part])
        return
      }

      let rule = compilePureClassName(part)
      if (rule) {
        if (rule.selector) {
          compiledRule.selectors.push(rule.selector)
        }

        if (rule.pseudo) {
          compiledRule.pseudos.push(rule.pseudo)
        }
        compiledRule.rules = { ...compiledRule.rules, ...rule }
      }
    })

    let rule = compiledRule.rules

    if (!Object.keys(rule).length) {
      return { screen: 'normal', rule: '' }
    }
    let escClassName = escapedClassName(className)
    if (rule instanceof Array) {
      // let rules = []
      // for (let r of rule) {
      //   rules.push({
      //     screen: r.screen,
      //     rule: objectToCss(
      //       `${escClassName}${pseudo.join('')}`,
      //       r.rule,
      //       screenAutoLevel && r.screen === 'normal' ? 0 : 1,
      //       {
      //         tabSize,
      //       }
      //     ),
      //   })
      // }
      // return rules
    } else {
      if (rule && escClassName) {
        let selectorsBefore = ''
        let selsectorsAfter = ''

        for (let sel of compiledRule.selectors) {
          if (sel.place === 'before') {
            selectorsBefore += sel.text + ' '
          } else {
            selsectorsAfter += ' ' + sel.text
          }
        }
        return {
          screen,
          rule: objectToCss(
            `${selectorsBefore}${escClassName}${compiledRule.pseudos.join(
              ''
            )}${selsectorsAfter}`,
            rule,
            screenAutoLevel && screen === 'normal' ? 0 : 1,
            {
              tabSize,
            }
          ),
        }
      }
    }
    return { screen: 'normal', rule: '' }
  }
}
