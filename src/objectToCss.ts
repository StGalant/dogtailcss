export interface CssFormatOptions {
  tabSize: number
}

export function objectToCss(
  obj: any,
  name: string,
  options: CssFormatOptions = { tabSize: 4 },
  level = 0
): string {
  let tab = ' '.repeat(options.tabSize)
  let l = tab.repeat(level)
  let css = `${l}${name} {\n`

  for (let prop in obj) {
    let propValue = obj[prop]
    let rule: string
    if (typeof propValue == 'object') {
      rule = objectToCss(propValue, prop, options, level + 1)
    } else {
      rule = `${tab}${prop}: ${propValue};\n`
    }
    css += `${l}${rule}`
  }
  css += `${l}}\n`
  return css
}
