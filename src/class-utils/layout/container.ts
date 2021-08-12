import { Theme } from '../../theme/index.js'
import { ClassUtility, ClassUtilResultElement } from '../../index.js'

export const container: ClassUtility = {
  container(value: string, theme: Theme) {
    if (value) return
    //TODO dynamic walues
    const rules: ClassUtilResultElement[] = [
      {
        screen: 'normal',
        rule: {
          width: '100%',
        },
      },
    ]

    for (let screen of theme.screens) {
      rules.push({
        screen: screen.name,
        rule: {
          'max-width': `${screen.minWidth}px`,
        },
      })
    }

    return rules
  },
}
