export const textDecoration = {
  underline(value: string) {
    if (value) return
    return {
      'text-decoration': 'underline',
    }
  },
  'no-underline'(value: string) {
    if (value) return
    return {
      'text-decoration': 'none',
    }
  },
  'line-through'(value: string) {
    if (value) return
    return {
      'text-decoration': 'line-through',
    }
  },
}
