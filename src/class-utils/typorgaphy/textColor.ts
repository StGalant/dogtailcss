import { match } from 'assert/strict'
import { Theme } from '../../theme/index.js'
import { ClassUtility } from '../index.js'

export const textColor: ClassUtility = {
  text(value: string, theme: Theme): any {
    if (!value) return

    //HEX color value
    if (value.match(/^#([a-f0-9]{3}){1,2}$/i)) {
      return {
        color: value,
      }
    }

    //text-(r,g,b)  =>  color: rgb(r,g,b)
    if (value.match(/^\(\d+,\d+,\d+\)$/)) {
      return {
        color: `rgb${value}`,
      }
    }
    //text-(r,g,b,a)  =>  color: rgba(r,g,b,a)
    if (value.match(/^\(\d+,\d+,\d+,(\d*[.])?\d+\)$/)) {
      return {
        color: `rgba${value}`,
      }
    }

    //text-[name]  =>  { color: var(--prefix-name) } or { color: var(--name) }
    if (value.match(/^\[[a-z0-9]+((\-[a-z0-9]+){1,})?\]$/)) {
      let prefix = '--' + (theme.varColorPrefix || theme.varPrefix || '')
      prefix = prefix == '--' ? '-' : prefix
      return {
        color: `var(${prefix}-${value.substring(1, value.length - 1)})`,
      }
    }

    // search color in theme
    if (value.match(/^\w+(-\w+)?$/g)) {
      let color = value.split('-').reduce((_, c) => c)
      if (!color) return
      if (!theme.useVarOpacity) {
        return {
          color,
        }
      }
      if (theme.useVarOpacity) {
        let r, g, b
        if (color.match(/^#([a-f0-9]{3})$/i)) {
          r = parseInt(color.substring(1, 2))
          g = parseInt(color.substring(2, 3))
          b = parseInt(color.substring(3, 4))
        }
        if (color.match(/^#([a-f0-9]{6})$/i)) {
          r = parseInt(color.substring(1, 3))
          g = parseInt(color.substring(3, 5))
          b = parseInt(color.substring(5, 7))
        }

        if (r && g && b) {
          let prefix = theme.varPrefix ? `--${theme.varPrefix}` : '-'
          color = `rgba(${r}, ${g}, ${b}, var(${prefix}-text-opacity))`
          return {
            [`${prefix}-text-opacity)`]: '1',
            color,
          }
        }
      }
    }
  },
  'text-opacity'(value: string, theme: Theme) {
    if (!value) return
    if (value.match(/^\d+$/)) {
      let prefix = theme.varPrefix ? `--${theme.varPrefix}` : '-'
      let opacity = (parseFloat(value) / 100).toFixed(4)
      return {
        [`${prefix}-text-opacity)`]: opacity,
      }
    }
  },
}
