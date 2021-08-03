export default {
  name: 'text-color',
  text(value: string, ctx: any): any {
    //HEX color value
    if (value.match(/^#([a-f0-9]{3}){1,2}\b/i)) {
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
      let prefix = '--' + (ctx.varColorPrefix || ctx.varPrefix || '')
      prefix = prefix == '--' ? '-' : prefix
      return {
        color: `var(${prefix}-${value.substring(1, value.length - 1)})`,
      }
    }

    // search color in theme
    let valueParts = value.split('-')
    let themeColor = ctx.theme.colors[valueParts[0]]
    if (themeColor) {
      if (valueParts.length == 1 && typeof themeColor == 'string') {
        return {
          color: themeColor,
        }
      }
      if (
        valueParts.length == 2 &&
        typeof themeColor == 'object' &&
        themeColor[valueParts[1]]
      ) {
        return {
          color: themeColor[valueParts[1]],
        }
      }

      console.warn(
        'CSS compilation failed for text-' +
          value +
          ' : Color not found in theme'
      )
      return
    }
    if (valueParts.length == 1 && ctx.theme.cssColors[value]) {
      return {
        color: ctx.theme.cssColors[value],
      }
    }
    return
  },
}
