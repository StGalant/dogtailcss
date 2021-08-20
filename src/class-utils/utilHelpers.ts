function withHidden(obj: any, name: string, value: any): any {
  return Object.defineProperty(obj, name, {
    value,
    enumerable: false,
  })
}

export function withPseudo(obj: any, value: any): any {
  return withHidden(obj, 'pseudo', value)
}

export function withSelector(obj: any, value: any): any {
  let selector =
    typeof value === 'string' ? { place: 'after', text: value } : value
  return withHidden(obj, 'selector', selector)
}
