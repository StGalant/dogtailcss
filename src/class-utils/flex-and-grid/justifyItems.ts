export const justifyItems = {
  'justify-items'(value: string) {
    if (/^(start|end|center|stretch)$/.test(value))
      return {
        'justify-items': value,
      }
  },
  'justify-self'(value: string) {
    if (/^(auto|start|end|center|stretch)$/.test(value))
      return {
        'justify-self': value,
      }
  },
}
