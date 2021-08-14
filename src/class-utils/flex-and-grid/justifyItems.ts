export const justifyItems = {
  'justify-items'(value: string) {
    if (!value.match(/^(start|end|center|stretch)$/g)) return
    return {
      'justify-items': value,
    }
  },
  'justify-self'(value: string) {
    if (!value.match(/^(auto|start|end|center|stretch)$/g)) return
    return {
      'justify-self': value,
    }
  },
}
