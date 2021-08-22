import { Theme } from '../theme/index.js'
import typorgaphy from './typorgaphy/index.js'
import layout from './layout/index.js'
import flexAndGrid from './flex-and-grid/index.js'
import spacing from './spacing/index.js'
import sizing from './sizing/index.js'
import selectors from './selectors/index.js'

interface Selector {
  place: 'before' | 'after'
  text: string
}

interface HiddenValues {
  selector?: Selector
  pseudo?: string
  screen?: string
}

export type ClassUtilResult = HiddenValues & {
  [key: string]: string
}

export interface ClassUtility {
  [key: string]: (
    value: string,
    theme: Theme
  ) => ClassUtilResult | ClassUtilResult[] | void
}

export type ClassUtils = Map<String, ClassUtility[]>
const defaultUtils: ClassUtility[] = [
  ...layout,
  ...flexAndGrid,
  ...spacing,
  ...sizing,
  ...typorgaphy,
  ...selectors,
]

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
