import { Theme } from './theme/index.js'
import { objectToCss } from './objectToCss.js'
import {
  ClassUtility,
  ClassUtils,
  ClassUtilResult,
} from './class-utils/index.js'

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

interface Selector {
  place: 'before' | 'after'
  text: string
}

type Rule = ClassUtilResult

interface CompiledRule {
  rule: Rule | Rule[] | void
  selectors: Selector[]
  pseudos: string[]
}

function assemblyClass(
  className: string,
  rule: Rule,
  screen: string,
  pseudos: string[],
  selectors: Selector[],
  screenAutoLevel: boolean,
  tabSize: number
) {
  {
    let selectorsBefore = ''
    let selsectorsAfter = ''

    for (let sel of selectors) {
      if (sel.place === 'before') {
        selectorsBefore += sel.text + ' '
      } else {
        selsectorsAfter += ' ' + sel.text
      }
    }

    return {
      screen,
      rule: objectToCss(
        `${selectorsBefore}${className}${pseudos.join('')}${selsectorsAfter}`,
        rule,
        screenAutoLevel && screen === 'normal' ? 0 : 1,
        {
          tabSize,
        }
      ),
    }
  }
}

export function createCssCompiler(
  classUtils: ClassUtils,
  theme: Theme,
  options = {}
): CssCompiler {
  let { tabSize, screenAutoLevel } = { ...defaultFormatOptions, ...options }
  return function (className): CssCompilerResult | CssCompilerResult[] {
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

    let compiledRule: CompiledRule = {
      rule: undefined,
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
        if (!(rule instanceof Array)) {
          if (rule.selector) {
            compiledRule.selectors.push(rule.selector)
          }

          if (rule.pseudo) {
            compiledRule.pseudos.push(rule.pseudo)
          }
        }

        if (Object.keys(rule).length || rule instanceof Array) {
          if (compiledRule.rule)
            console.warn(
              'Multiple css utils in class ' +
                className +
                '\nLast correct util will be used instead.'
            )
          if (rule instanceof Array) {
            compiledRule.rule = rule
          } else {
            compiledRule.rule = { ...rule }
          }
        }
      }
    })

    //if rule is empty
    if (!compiledRule.rule) return { screen: 'normal', rule: '' }
    if (compiledRule.rule instanceof Array && compiledRule.rule.length === 0)
      return { screen: 'normal', rule: '' }
    if (
      !(compiledRule.rule instanceof Array) &&
      !Object.keys(compiledRule.rule).length
    ) {
      return { screen: 'normal', rule: '' }
    }

    let escClassName = escapedClassName(className)
    if (compiledRule.rule instanceof Array) {
      let rules = []
      for (let r of compiledRule.rule) {
        let pseudos = compiledRule.pseudos
        if (r.pseudo) {
          pseudos = [...pseudos, r.pseudo]
        }

        let selectors = compiledRule.selectors
        if (r.selector) {
          selectors = [...selectors, r.selector]
        }

        rules.push(
          assemblyClass(
            escClassName,
            r,
            r.screen ? r.screen : screen,
            pseudos,
            selectors,
            screenAutoLevel,
            tabSize
          )
        )
      }
      return rules
    } else {
      return assemblyClass(
        escClassName,
        compiledRule.rule as Rule,
        screen,
        compiledRule.pseudos,
        compiledRule.selectors,
        screenAutoLevel,
        tabSize
      )
    }
    return { screen: 'normal', rule: '' }
  }
}
