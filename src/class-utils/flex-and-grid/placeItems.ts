export const placeItems = {
  'place-items'(value: string) {
    if (!value) return
    if (value.match(/^(start|end|center|stretch)$/g)) {
      return {
        'place-items': value,
      }
    }
  },
  'place-self'(value: string) {
    if (!value) return
    if (value.match(/^(auto|start|end|center|stretch)$/g)) {
      return {
        'place-items': value,
      }
    }
  },
}
