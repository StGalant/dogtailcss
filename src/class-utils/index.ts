import { TextColor } from './TextColor'

export interface ClassUtility {
  [key: string]: Function
}

export type ClassUtils = Map<String, Object[]>
const defaultUtils: ClassUtility[] = [TextColor]

export function createClassUtils(addons: ClassUtility[] = []): ClassUtils {
  let utils = new Map<String, ClassUtility[]>()
  let mergedUtils = [...addons, ...defaultUtils]
  mergedUtils.forEach((util) => {
    for (let utilityName in util) {
      if (utils.has(utilityName)) {
        utils.get(utilityName).push(util)
      } else {
        utils.set(utilityName, [util])
      }
    }
  })
  return utils
}
