import { Theme } from '../theme/index.js'

export function hex2rgba(hex: string, opacity: string | number): string | void {
  let r, g, b

  if (hex.length === 4) {
    r = parseInt(hex.substring(1, 2).repeat(2), 16)
    g = parseInt(hex.substring(2, 3).repeat(2), 16)
    b = parseInt(hex.substring(3, 4).repeat(2), 16)
  }
  if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16)
    g = parseInt(hex.substring(3, 5), 16)
    b = parseInt(hex.substring(5, 7), 16)
  }
  //if undefined or NaN return empty value
  if (
    r == undefined ||
    g == undefined ||
    b == undefined ||
    r !== r ||
    g !== g ||
    b !== b
  )
    return

  if (typeof opacity === 'number') opacity = opacity.toFixed(4)

  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

export function isHexColor(value: string): boolean {
  return /^#([a-f0-9]{3}){1,2}$/i.test(value)
}

export function hexColor(value: string): string | void {
  if (isHexColor(value)) {
    return value
  }
}

export function isRgbColor(value: string): boolean {
  return /^\(\d+,\d+,\d+\)$/.test(value)
}

export function isRgbaColor(value: string): boolean {
  return /^\(\d+,\d+,\d+,(0|[1-9]\d*)?\.?\d+\)$/.test(value)
}

export function rgbColor(value: string): string | void {
  if (isRgbColor(value)) {
    return `rgb${value}`
  }

  if (isRgbaColor(value)) {
    return `rgba${value}`
  }
}

export function varColor(value: string, theme: Theme) {
  let r = /^\[\w+((-\w+)?)+\]$/

  if (r.test(value)) {
    let prefix = '--' + (theme.varColorPrefix || theme.varPrefix || '')
    prefix = prefix == '--' ? '-' : prefix
    return `var(${prefix}-${value.substring(1, value.length - 1)})`
  }
}

export function themeColor(value: string, theme: Theme, varName?: string) {
  if (/^\w+(-\w+)?$/.test(value)) {
    let colorParts = value.split('-')

    let color
    if (colorParts.length === 1) {
      color = theme.colors[value]
    }
    if (colorParts.length === 2) {
      let colorObj = theme.colors[colorParts[0]]

      if (typeof colorObj !== 'object') return
      color = colorObj[colorParts[1]]
    }

    if (!color || typeof color !== 'string') return

    // tailwind-like text opacity solution
    if (theme.useVarOpacity) {
      let prefix = theme.varPrefix ? `--${theme.varPrefix}` : '-'
      varName ||= 'text'
      let opacity = `var(${prefix}-${varName}-opacity, 1)`
      if (isHexColor(color)) {
        color = hex2rgba(color, opacity)
      } else if (isRgbColor(color)) {
        color =
          'rgba' +
          color
            .substring(0, 3)
            .replace(/\)$/, ` var(${prefix}-${varName}-opacity)`)
      } else if (isRgbaColor(color)) {
        color = color.replace(/,[^,]+\)$/, ` ${opacity}`)
      }

      return color
    } else {
      return color
    }
  }

  //alternative opacity solution
  // text-blue-900-op-50 => { color: rgba(r, g, b, 0.5)}
  if (/^\w+(-\w+)?-op(acity)?-(0|[1-9]\d*)?\.?\d+$/.test(value)) {
    let colorParts = value.split('-')
    let color
    if (colorParts.length === 3) {
      color = theme.colors[colorParts[0]]
    }
    if (colorParts.length === 4) {
      let colorObj = theme.colors[colorParts[0]]
      if (typeof colorObj !== 'object') return
      color = colorObj[colorParts[1]]
    }

    if (!color || typeof color !== 'string') return

    let opacity = parseFloat(colorParts[colorParts.length - 1])
    if (opacity > 1.0) {
      opacity = opacity / 100.0
    }

    // if (isHexColor(color)) {
    //   color = hex2rgba(color, `${opacity}`)
    // } else if (isRgbColor(color)) {
    //   color = 'rgba' + color.substring(3, color.length - 1) + `, ${opacity})`
    // } else if (isRgbaColor(color)) {
    //   color = color.replace(/,[^,]+\)$/, `, ${opacity})`)
    // }
    return toRGBA(color, opacity)
  }
}

export function toRGBA(color: string, opacity: string | number): string {
  let c = ''
  if (isHexColor(color)) {
    c = hex2rgba(color, `${opacity}`) || ''
  } else if (isRgbColor(color)) {
    c = 'rgba' + color.substring(3, color.length - 1) + `, ${opacity})`
  } else if (isRgbaColor(color)) {
    c = color.replace(/,[^,]+\)$/, `, ${opacity})`)
  }

  return c
}

export function getColor(value: string, theme: Theme, varName?: string) {
  return (
    themeColor(value, theme, varName) ||
    hexColor(value) ||
    rgbColor(value) ||
    varColor(value, theme)
  )
}
