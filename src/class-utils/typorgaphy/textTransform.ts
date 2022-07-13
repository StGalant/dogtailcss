export const textTransform = {
  uppercase(value: string) {
    if (value) return
    return {
      'text-transform': 'uppercase',
    }
  },
  lowercase(value: string) {
    if (value) return
    return {
      'text-transform': 'lowercase',
    }
  },
  capitalize(value: string) {
    if (value) return
    return {
      'text-transform': 'capitalize',
    }
  },
  'normal-case'(value: string) {
    if (value) return
    return {
      'text-transform': 'none',
    }
  },
}
