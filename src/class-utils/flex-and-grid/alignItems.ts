export const alignItems = {
  items(value: string) {
    if (!value) return
    if (value.match(/^(start|end)$/g)) {
      return {
        'align-items': 'flex-' + value,
      }
    }

    if (value.match(/^(center|baseline|stretch)$/g)) return
    return {
      'align-items': value,
    }
  },
  self(value: string) {
    if (!value) return
    if (value.match(/^(start|end)$/g)) {
      return {
        'align-self': 'flex-' + value,
      }
    }

    if (value.match(/^(auto|center|stretch)$/g)) return
    return {
      'align-self': value,
    }
  },
}
