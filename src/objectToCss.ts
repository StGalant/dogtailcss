export interface CssFormatOptions {
  tabSize: number
}

export function objectToCss(
  name: string,
  obj: any,
  level = 0,
  options: CssFormatOptions = { tabSize: 4 }
): string {
  let tab = ' '.repeat(options.tabSize)
  let l = tab.repeat(level)
  let css = `${l}${name} {\n`

  for (let prop in obj) {
    let propValue = obj[prop]
    css += `${l}${tab}${prop}: ${propValue};\n`
  }
  css += `${l}}\n`
  return css
}
