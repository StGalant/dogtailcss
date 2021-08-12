import { Theme } from '../theme/index.js'
import { textColor } from './textColor.js'
import layout from './layout/index.js'

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
const defaultUtils: ClassUtility[] = [...layout, textColor]

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
