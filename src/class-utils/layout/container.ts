import { Theme } from '../../theme/index.js'
import { ClassUtility, ClassUtilResult } from '../../index.js'
import { SCREEN } from '../index.js'

export const container: ClassUtility = {
  container(value: string, theme: Theme): ClassUtilResult[] | void {
    if (value) return
    //TODO dynamic walues
    const rules: ClassUtilResult[] = [
      {
        width: '100%',
        [SCREEN]: 'normal',
      },
    ]

    for (let screen of theme.screens) {
      rules.push({
        'max-width': `${screen.minWidth}px`,
        [SCREEN]: screen.name,
      })
    }

    return rules
  },
}
