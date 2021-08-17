export const placeContent = {
  'place-content'(value: string) {
    if (!value) return
    if (/^(center|start|end|stretch)$/.test(value)) {
      return {
        'place-content': value,
      }
    }

    if (/^(between|around|evenly)$/.test(value)) {
      return {
        'place-content': 'space-' + value,
      }
    }
  },
}
