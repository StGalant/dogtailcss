import { Theme } from '../../theme/index.js'
import { ClassUtility, ClassUtilResult } from '../../index.js'
import { withScreen } from '../utilHelpers.js'

export const container: ClassUtility = {
  container(value: string, theme: Theme): ClassUtilResult[] | void {
    if (value) return
    //TODO dynamic walues
    const rules: ClassUtilResult[] = [
      withScreen(
        {
          width: '100%',
        },
        'normal'
      ),
    ]

    for (let screen of theme.screens) {
      rules.push(
        withScreen(
          {
            'max-width': `${screen.minWidth}px`,
          },
          screen.name
        )
      )
    }

    return rules
  },
}
