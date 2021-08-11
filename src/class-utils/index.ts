import { TextColor } from './TextColor.js'

export interface ClassUtility {
  [key: string]: Function
}

export type ClassUtils = Map<String, ClassUtility[]>
const defaultUtils: ClassUtility[] = [TextColor]

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
