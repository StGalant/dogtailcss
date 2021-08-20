import { Theme } from '../../theme/index.js'
import { ClassUtility } from '../../index.js'

export const container: ClassUtility = {
  container(value: string, theme: Theme) {
    if (value) return

    return {
      screen: 'normal',
      rule: {
        width: '100%',
      },
    }
  },
}
