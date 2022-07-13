import { SELECTOR, ClassUtility, ClassUtilResult } from '../index.js'

export const nearChecked: ClassUtility = {
  '~check'(value: string): ClassUtilResult | void {
    if (value) return
    return {
      [SELECTOR]: {
        place: 'before',
        text: `input:checked ~`,
      },
    }
  },
  '~checked'(value: string): ClassUtilResult | void {
    if (value) return
    return {
      [SELECTOR]: {
        place: 'before',
        text: `input:checked ~`,
      },
    }
  },
  '+check'(value: string): ClassUtilResult | void {
    if (value) return
    return {
      [SELECTOR]: {
        place: 'before',
        text: `input:checked +`,
      },
    }
  },
  '+checked'(value: string): ClassUtilResult | void {
    if (value) return
    return {
      [SELECTOR]: {
        place: 'before',
        text: `input:checked +`,
      },
    }
  },
}
