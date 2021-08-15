import { ClassUtilResult } from '../index.js'
import { Theme } from '../../theme/index.js'

export const fontSize = {
  text(value: string, theme: Theme): ClassUtilResult | void {
    if (!value) return

    let { value: fontSize, lineHeight } = theme.fontSize[value]

    if (fontSize) {
      let result: ClassUtilResult = {
        'font-size': fontSize,
      }
      if (lineHeight) {
        result['line-height'] = lineHeight
      }
      return result
    }

    if (value.match(/^\d+(\.\d+)?$/)) {
      return {
        'font-size': value,
      }
    }

    if (value.match(/^\d+(\.\d+)?-\d+(\.\d+)?$/)) {
      let [fontSize, lineHeight] = value.split('-')
      return {
        'font-size': fontSize,
        'line-height': lineHeight,
      }
    }
  },
  font(value: string, theme: Theme) {
    return fontSize.text(value, theme)
  },
}
