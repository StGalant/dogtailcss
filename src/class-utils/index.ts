import { Theme } from '../theme/index.js'
import typorgaphy from './typorgaphy/index.js'
import layout from './layout/index.js'
import flexAndGrid from './flex-and-grid/index.js'
import spacing from './spacing/index.js'
import sizing from './sizing/index.js'

export interface ClassUtilResult {
  [key: string]: any
}

export interface ClassUtilResultElement {
  screen: string
  rule: ClassUtilResult
}

export interface ClassUtility {
  [key: string]: (
    value: string,
    theme: Theme
  ) => ClassUtilResult | ClassUtilResultElement[] | void
}

export type ClassUtils = Map<String, ClassUtility[]>
const defaultUtils: ClassUtility[] = [
  ...layout,
  ...flexAndGrid,
  ...spacing,
  ...sizing,
  ...typorgaphy,
]

export function getSpacing(value: string, theme: Theme): string {
  let sign = value.substring(0, 1) === '-' ? '-' : ''
  let uValue = sign ? value.substring(1) : value
  let space =
    theme.spacing[uValue] ||
    (uValue.match(/^\d+(\.\d+)?(px|%|em|rem|wv|wh)$/g) ? uValue : '')
  return space ? sign + space : ''
}

export function createClassUtils(addons: ClassUtility[] = []): ClassUtils {
  let utils: ClassUtils = new Map<String, ClassUtility[]>()
  let mergedUtils = [...addons, ...defaultUtils]
  mergedUtils.forEach((util) => {
    for (let utilityName in util) {
      if (utils.has(utilityName)) {
        ;(utils.get(utilityName) as ClassUtility[]).push(util)
      } else {
        utils.set(utilityName, [util])
      }
    }
  })
  return utils
}
