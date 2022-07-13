export const alignItems = {
  items(value: string) {
    if (!value) return
    if (/^(start|end)$/.test(value)) {
      return {
        'align-items': 'flex-' + value,
      }
    }

    if (/^(center|baseline|stretch)$/.test(value)) return
    return {
      'align-items': value,
    }
  },
  self(value: string) {
    if (!value) return
    if (/^(start|end)$/.test(value)) {
      return {
        'align-self': 'flex-' + value,
      }
    }

    if (/^(auto|center|stretch)$/.test(value)) return
    return {
      'align-self': value,
    }
  },
}
