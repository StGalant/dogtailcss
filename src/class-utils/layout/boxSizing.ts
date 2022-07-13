import { ClassUtility, ClassUtilResult } from '../../index.js'

export const boxSizing: ClassUtility = {
  box(value: string): ClassUtilResult | void {
    switch (value) {
      case 'border':
        return { 'box-sizing': 'border-box' }
      case 'content':
        return { 'box-sizing': 'content-box' }
    }
  },
}
