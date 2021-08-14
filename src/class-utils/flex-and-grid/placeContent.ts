export const placeContent = {
  'place-content'(value: string) {
    if (!value) return
    if (value.match(/^(center|start|end|stretch)$/g)) {
      return {
        'place-content': value,
      }
    }

    if (value.match(/^(between|around|evenly)$/g)) {
      return {
        'place-content': 'space-' + value,
      }
    }
  },
}
