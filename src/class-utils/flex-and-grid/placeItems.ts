export const placeItems = {
  'place-items'(value: string) {
    if (!value) return
    if (/^(start|end|center|stretch)$/.test(value)) {
      return {
        'place-items': value,
      }
    }
  },
  'place-self'(value: string) {
    if (!value) return
    if (/^(auto|start|end|center|stretch)$/.test(value)) {
      return {
        'place-items': value,
      }
    }
  },
}
