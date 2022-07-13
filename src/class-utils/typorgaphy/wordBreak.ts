import { ClassUtilResult } from '../index.js'

export const wordBreak = {
  break(value: string): ClassUtilResult | void {
    if (!value) return
    if (value === 'normal') {
      return {
        'overflow-wrap': value,
        'word-break': value,
      }
    }

    if (value === 'words') {
      return {
        'overflow-wrap': 'break-word',
      }
    }

    if (value === 'all') {
      return {
        'word-break': 'break-all',
      }
    }
  },
}
